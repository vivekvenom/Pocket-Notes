import { useState } from "react";
import Modal from "../Modal/Modal.component";
import "./Navbar.css";
import deleteButton from "../../assets/delete-icon.svg";

const Navbar = ({
  addInfo,
  notes,
  activeNote,
  setActiveNote,
  onDeleteNote,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const info = (groupName, color) => {
    addInfo(groupName, color);
  };

  return (
    <nav className="navbar" style={{ zIndex: "1" }}>
      <h1>Pocket Notes</h1>
      <div className="create-notes">
        <button onClick={() => setIsOpen(true)}>+ Create Notes</button>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} info={info} />
      <div className="note-body">
        {notes.map((note) => {
          return (
            <div
              className={`note-title-container ${
                activeNote === note.id && "active"
              }`}
              key={note.id}
            >
              <div
                className="note-heading-container"
                onClick={() => setActiveNote(note.id)}
              >
                <p
                  className="note-icon"
                  style={{ backgroundColor: `${note.color}` }}
                >
                  {note.title.length > 1
                    ? note.title.substr(0, 2)
                    : note.title.charAt(0)}
                </p>
                <p className="note-title">{note.title}</p>
              </div>
              <button onClick={() => onDeleteNote(note.id)}>
                <img src={deleteButton} alt="delete" />
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
