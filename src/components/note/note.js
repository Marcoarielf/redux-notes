import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "../../reducers/noteReducer";
import { FcBookmark } from "react-icons/fc";

export const Note = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleImportance = (id) => {
    console.log(id);
    dispatch(toggleImportanceOf(id));
  };
  return (
    <ul>
      {state.map((note) => (
        <div style={{ display: "flex" }}>
          <li onClick={() => toggleImportance(note.id)} key={note.id}>
            {note.content}
          </li>
          {note.important && (
            <p style={{ margin: 0 }}>
              <FcBookmark />
            </p>
          )}
        </div>
      ))}
    </ul>
  );
};
