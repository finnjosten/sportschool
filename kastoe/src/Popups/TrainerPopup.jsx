import React from "react";

//onAccept, onReject
function TrainerPopup({ open, onClose, trainer, state, onRequest }) {
    if (!trainer) return null;

    return (
        <div className={`modal--overlay ${open ? "--active" : ""}`}>
            <div className="modal">
                <div className="modal__body">
                    <h2>{trainer.title}</h2>
                    <p>{trainer.description}</p>
                    {state === "neutral" && (
                        <button className="btn btn--primary" onClick={onRequest}>Vraag aan als personal trainer</button>
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
                </div>
                <div className="modal__footer">
                    <button className="btn btn--secondary" onClick={onClose}>Sluiten</button>
                </div>
            </div>
        </div>
    );
}

export default TrainerPopup;