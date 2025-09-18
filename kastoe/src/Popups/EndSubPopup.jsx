import React from "react";
import "./EndSubPopup.css";

function EndSubPopup({ open, onClose, onEnd }) {
    if (!open) return null;
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>Abonnement annuleren</h2>
                <p>Weet je zeker dat je je abonnement wilt annuleren?</p>
                <div className="popup-actions">
                    <button onClick={onEnd}>Annuleren</button>
                    <button onClick={onClose}>Terug</button>
                </div>
            </div>
        </div>
    );
}

export default EndSubPopup;