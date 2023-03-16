import Body from "../Body/body.component";
import "./Main.css";
import submitButton from "../../assets/submit-button.svg";

const Main = ({ activeNote, onUpdateNote }) => {
  if (activeNote === undefined) {
    return null;
  }

  const handleSubmit = (key, e) => {
    e.preventDefault();
    const value = document.querySelector(".body-text");
    console.log(value);
    const myObj = {
      lastModified: {
        time: `${new Date().toLocaleString("default", {
          hour: "numeric",
          minute: "numeric",
          hour12: "true",
        })}`,
        date: `${new Date().getDay()} ${new Date().toLocaleString("default", {
          month: "long",
        })} ${new Date().getFullYear()}`,
      },
      text: value.value,
    };
    onUpdateNote({
      ...activeNote,
      [key]: [...activeNote.body, myObj],
      sort: Date.now(),
    });
    e.target.reset();
  };

  return (
    <div className="main">
      <div className="note-body-header">
        <p
          className="note-icon"
          style={{ backgroundColor: `${activeNote.color}` }}
        >
          {activeNote.title.length > 1
            ? activeNote.title.substr(0, 2)
            : activeNote.title.charAt(0)}
        </p>
        <p
          className="note-title"
          style={{ fontSize: "1.5rem", fontWeight: "500" }}
        >
          {activeNote.title}
        </p>
      </div>
      <Body activeNoteBody={activeNote.body} />
      <form
        className="note-body-input"
        onSubmit={(e) => handleSubmit("body", e)}
      >
        <textarea
          className="body-text"
          placeholder="Enter your text here........"
        ></textarea>
        <button type="submit">
          <img src={submitButton} alt="submit-btn" />
        </button>
      </form>
    </div>
  );
};

export default Main;
