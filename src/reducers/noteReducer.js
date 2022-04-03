export const noteReducer = (state = [], action) => {
  if (action.type === "NEW_NOTE") {
    // return state.concat(action.payload);
    return [...state, action.payload];
  }
  if (action.type === "TOGGLE_IMPORTANCE") {
    const { id } = action.payload;
    return state.map((note) => {
      if (note.id === id) {
        return {
          ...note, // spread to create a new object
          important: !note.important,
        };
      }
      return note;
    });
  }
  return state;
};

export const createNote = (value) => {
  const uId = Math.abs(Math.random() * 100);
  return {
    type: "NEW_NOTE",
    payload: {
      content: value,
      id: uId,
      important: false,
    },
  };
};

export const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    payload: {
      id,
    },
  };
};
