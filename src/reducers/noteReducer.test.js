import { noteReducer } from "./noteReducer";

describe("noteReducer", () => {
  test("returns new state after toggle importance", () => {
    const state = [
      {
        id: 1,
        content: "test1",
        important: false,
      },
      {
        id: 2,
        content: "test2",
        important: false,
      },
    ];

    const action = {
      type: "TOGGLE_IMPORTANCE",
      payload: {
        id: 2,
      },
    };

    const newState = noteReducer(state, action);

    expect(newState).toHaveLength(2);
    expect(newState).toContainEqual(state[0]);
    expect(newState).toContainEqual({
      id: 2,
      content: "test2",
      important: true,
    });
  });
});
