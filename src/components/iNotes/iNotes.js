import { useSelector } from "react-redux";

export default function ImportantNote() {
  const importantNotes = useSelector((state) =>
    state.notes.filter((notes) => notes.important)
  );

  if (importantNotes.length === 0) return;
  return (
    <div>
      Your important notes
      <ul>
        {importantNotes.map((iNote) => (
          <li key={iNote.id}>{iNote.content}</li>
        ))}
      </ul>
    </div>
  );
}
