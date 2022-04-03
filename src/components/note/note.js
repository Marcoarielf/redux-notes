import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "../../reducers/noteReducer";
import { FcBookmark } from "react-icons/fc";
import css from "./styles.module.css";

export const Note = () => {
  const state = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const toggleImportance = (id) => {
    console.log(id);
    dispatch(toggleImportanceOf(id));
  };
  return (
    <ul>
      {state.map((note) => (
        <div className={css.containerNote}>
          <li onClick={() => toggleImportance(note.id)} key={note.id}>
            <p>{note.content}</p>
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
