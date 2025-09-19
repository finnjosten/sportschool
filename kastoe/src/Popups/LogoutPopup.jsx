import React from "react";

function LogoutPopup({ open, onClose, onLogout }) {
    return (
        <div className={`modal--overlay ${open ? "--active" : ""}`}>
            <div className="modal">
                <div className="modal__body">
                    <h2>Uitloggen</h2>
                    <p>Weet je zeker dat je wilt uitloggen?</p>
                </div>
                <div className="modal__footer">
                    <button className="btn btn--primary" onClick={onLogout}>Uitloggen</button>
                    <button className="btn btn--secondary" onClick={onClose}>Sluiten</button>
                </div>
            </div>
        </div>
    );
}

export default LogoutPopup;