import React from "react";
import "./LogoutPopup.css";

function LogoutPopup({ open, onClose, onLogout }) {
    if (!open) return null;
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>Uitloggen</h2>
                <p>Weet je zeker dat je wilt uitloggen?</p>
                <div className="popup-actions">
                    <button onClick={onLogout}>Uitloggen</button>
                    <button onClick={onClose}>Annuleren</button>
                </div>
            </div>
        </div>
    );
}

export default LogoutPopup;