import React from "react";

function CursusPopup({ open, onClose, cursus, onJoin }) {
    if (!cursus) return null;

    return (
        <div className={`modal--overlay ${open ? "--active" : ""}`}>
            <div className="modal">
                <div className="modal__body">
                    <h2>{cursus.title}</h2>
                    <p>{cursus.description}</p>
                </div>
                <div className="modal__footer">
                    <button className="btn btn--primary" onClick={onJoin}>Aanmelden</button>
                    <button className="btn btn--secondary" onClick={onClose}>Sluiten</button>
                </div>
            </div>
        </div>
    );
}

export default CursusPopup;