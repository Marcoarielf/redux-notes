import { createNote } from "../../reducers/noteReducer";
import { useDispatch } from "react-redux";
import css from "./styles.module.css";
export const NewNote = () => {
  const dispatch = useDispatch();

  const addNote = (e) => {
    e.preventDefault();
    const { value } = e.target.note;
    console.log(value);
    dispatch(createNote(value));
  };
  return (
    <form onSubmit={addNote} className={css.form}>
      <input type="text" name="note" placeholder="add Note" />
      <button type="submit">Enviar</button>
    </form>
  );
};
