import React from "react";
import "./TrainerPopup.css";

//onAccept, onReject
function TrainerPopup({ open, onClose, trainer, state, onRequest }) {
    if (!open || !trainer) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>{trainer.title}</h2>
                <p>{trainer.description}</p>
                {state === "neutral" && (
                    <button onClick={onRequest}>Vraag aan als personal trainer</button>
                )}
                {state === "pending" && (
                    <p>Je aanvraag is verzonden. Wacht op reactie...</p>
                )}
                {state === "accepted" && (
                    <p>Trainer heeft je aanvraag geaccepteerd!</p>
                )}
                {state === "rejected" && (
                    <p>Trainer heeft je aanvraag geweigerd.</p>
                )}
                <button onClick={onClose}>Sluiten</button>
            </div>
        </div>
    );
}

export default TrainerPopup;