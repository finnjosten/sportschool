import React from "react";

function EndSubPopup({ open, onClose, onEnd }) {
    return (
        <div className={`modal--overlay ${open ? "--active" : ""}`}>
            <div className="modal">
                <div className="modal__body">
                    <h2>Abonnement annuleren</h2>
                    <p>Weet je zeker dat je je abonnement wilt annuleren?</p>
                </div>
                <div className="modal__footer">
                    <button className="btn btn--primary" onClick={onEnd}>Zeg stop</button>
                    <button className="btn btn--secondary" onClick={onClose}>Sluiten</button>
                </div>
            </div>
        </div>
    );
}

export default EndSubPopup;