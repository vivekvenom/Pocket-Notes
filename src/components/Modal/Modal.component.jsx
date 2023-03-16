import "./Modal.css";
import ReactDOM from "react-dom";
import { useState } from "react";

const Modal = ({ open, onClose, info }) => {
  const [color, setColor] = useState("black");

  if (!open) return null;
  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const handleClick = () => {
    const GroupName = document.querySelector(".note-text").value;
    if (GroupName === "" || GroupName === undefined) {
      return alert("Enter Group Name");
    }
    info(GroupName, color);
    onClose();
  };

  const handleColor = (e) => {
    const color = e.target.style.backgroundColor;
    setColor(color);
  };

  return ReactDOM.createPortal(
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-container">
        <p className="modal-heading">Create New Note</p>
        <div className="note-container">
          <label htmlFor="note">Group Name</label>
          <input
            className="note-text"
            type="text"
            name="note"
            placeholder="Enter your Group name..."
            required
          />
        </div>
        <div className="colors">
          <p>Choose color </p>
          <div className="color-options">
            {colors.map((color, index) => {
              return (
                <button
                  key={index}
                  className="color-picker"
                  style={{ backgroundColor: `${color}` }}
                  onClick={handleColor}
                ></button>
              );
            })}
          </div>
        </div>
        <button className="create-note-btn" onClick={handleClick}>
          Create Note
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
