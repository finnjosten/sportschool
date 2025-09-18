import React from "react";
import "./CursusPopup.css";

function CursusPopup({ open, onClose, cursus, onJoin }) {
    if (!open || !cursus) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>{cursus.title}</h2>
                <p>{cursus.description}</p>
                <button onClick={onJoin}>Aanmelden</button>
                <button onClick={onClose}>Sluiten</button>
            </div>
        </div>
    );
}

export default CursusPopup;