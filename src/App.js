import Navbar from "./components/Navbar/Navbar.component";
import Main from "./components/Main/Main.component";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState(
    localStorage.getItem("notes") ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const info = (groupName, color) => {
    const newNotes = {
      id: uuid(),
      title: groupName,
      body: [
        {
          lastModified: Date.now(),
          text: "",
        },
      ],
      color: color,
      sort: Date.now(),
    };

    setNotes([newNotes, ...notes]);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        console.log(updatedNote);
        return updatedNote;
      }

      return note;
    });
    const sortedNotes = updatedNotesArray.sort((a, b) => b.sort - a.sort);
    setNotes(sortedNotes);
  };

  const onDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <Navbar
        addInfo={info}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        onDeleteNote={onDeleteNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
