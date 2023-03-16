import "./body.css";

const Body = ({ activeNoteBody }) => {
  const mapFunction = () => {
    return activeNoteBody.map((note, index) => {
      if (note.text === "") {
        return null;
      }
      return (
        <div className="note-content-container" key={index}>
          <div className="date-container">
            <p>{note.lastModified.time}</p>
            <p>{note.lastModified.date}</p>
          </div>
          <div className="text-container">
            <p>{note.text}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="note-body-text">{mapFunction()}</div>
    </>
  );
};

export default Body;
