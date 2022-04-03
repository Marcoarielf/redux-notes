import React from "react";
import { NewNote } from "./components/newNote/newNote";
import { Note } from "./components/note/note";
import ImportantNotes from "./components/iNotes/iNotes";
import Filters from "./components/filters/filters";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My notes</h1>
        <NewNote />
        <Filters />
        <Note />
        <ImportantNotes />
      </header>
    </div>
  );
};

export default App;
