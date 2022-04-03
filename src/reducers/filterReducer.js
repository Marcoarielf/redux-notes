export default function FilterReducer(state = [], action) {
  console.log("action", action);
  return state;
}

export const filter = (value) => {
  const uId = Math.abs(Math.random() * 100);
  return {
    type: "FILTER_NOTES",
    payload: {
      content: value,
      id: uId,
      important: false,
    },
  };
};
