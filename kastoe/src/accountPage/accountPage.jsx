import React, { useState } from "react";
import "./accountPage.css";
import CursusPopup from "../popups/CursusPopup";
import TrainerPopup from "../popups/TrainerPopup";

import { FaXmark } from "react-icons/fa6";
import { FaArrowUp, FaArrowDown, FaCheck, FaSignOutAlt, FaPaperPlane, FaPlus  } from "react-icons/fa";

const iconSize = 16;

function CursusCard({ title, items, onOpenPopup }) {
    return (
        <div className="card card--account card--cursus">
            <h3 className="card__title">{title}</h3>
            <div className="card__items">
                {items?.map((item, idx) => (
                    <div className="card card--box" key={idx}>
                        <div className="card__body">
                            <p className="card__title">{item.title}</p>
                            <p className="card__description">{item.description}</p>
                        </div>
                        <div className="card__footer">
                            <span className="icon-wrapper"
                            onClick={() => onOpenPopup(item)}>
                                <FaPlus size={iconSize} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function TrainerCard({ title, items, onOpenPopup }) {
    return (
        <div className="card card--account card--trainer">
            <h3 className="card__title">{title}</h3>
            <div className="card__items">
                {items?.map((item, idx) => (
                    <div className="card card--box" key={idx}>
                        <div className="card__body">
                            <p className="card__title">{item.title}</p>
                            <p className="card__description">{item.description}</p>
                        </div>
                        <div className="card__footer">
                            <span className="icon-wrapper"
                            onClick={() => onOpenPopup(item)}>
                                <FaPaperPlane size={iconSize} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function AccountCard({ title, items }) {
    const handleAccountAction = (item) => {
        // Call your accountPopup logic here
        console.log("Account action for:", item);
    };

    return (
        <div className="card card--account">
            <h3 className="card__title">{title}</h3>
            <div className="card__items">
                {items?.map((item, idx) => (
                    <div className="card card--box" key={idx}>
                        <div className="card__body">
                            <p className="card__title">{item.title}</p>
                            <p className="card__description">{item.description}</p>
                        </div>
                        <div className="card__footer">
                            <span className="icon-wrapper"
                            onClick={() => handleAccountAction(item)}>
                                <item.icon size={iconSize} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function AccountPage() {
    const [cursusPopupOpen, setCursusPopupOpen] = useState(false);
    const [selectedCursus, setSelectedCursus] = useState(null);

    const [trainerPopupOpen, setTrainerPopupOpen] = useState(false);
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [trainerPopupState, setTrainerPopupState] = useState("neutral"); // "neutral", "pending", "accepted", "rejected"

    const cursusOptions = [
        { title: "Yoga cursus", description: "Woensdag 19 januari is er een yoga cursus om 21:00" },
        { title: "Pilates cursus", description: "Vrijdag 21 januari is er een pilates cursus om 18:00" },
        { title: "Kickboksen cursus", description: "Maandag 24 januari is er een kickboksen cursus om 20:00" }
    ];
    const trainerOptions = [
        { title: "John Doe", description: "Personal trainer specialized in body building" },
        { title: "Jane Smith", description: "Personal trainer specialized in yoga" },
        { title: "Mike Brown", description: "Personal trainer specialized in cardio" }
    ];
    const accountOptions = [
        {
            title: "Verhoog abonnement",
            description: "Verhoog je abonnement naar niveau {niveau}",
            icon: FaArrowUp
        },
        {
            title: "Verlaag abonnement",
            description: "Verlaag je abonnement naar niveau {niveau}",
            icon: FaArrowDown
        },
        {
            title: "Abonnement annuleren",
            description: "Annuleer makkelijk je abonnement met de knop",
            icon: FaXmark
        },
        {
            title: "Uitloggen",
            description: "Loguit van je account beheer",
            icon: FaSignOutAlt
        }
    ];

    // Handlers for popups
    const handleOpenCursusPopup = (item) => {
        setSelectedCursus(item);
        setCursusPopupOpen(true);
    };

    const handleCloseCursusPopup = () => {
        setCursusPopupOpen(false);
        setSelectedCursus(null);
    };

    const handleJoinCursus = () => {
        alert("Je bent aangemeld voor de cursus!");
        setCursusPopupOpen(false);
        setSelectedCursus(null);
    };

    const handleOpenTrainerPopup = (item) => {
        setSelectedTrainer(item);
        setTrainerPopupState("neutral");
        setTrainerPopupOpen(true);
    };

    const handleCloseTrainerPopup = () => {
        setTrainerPopupOpen(false);
        setSelectedTrainer(null);
        setTrainerPopupState("neutral");
    };

    const handleRequestTrainer = () => {
        setTrainerPopupState("pending");
        setTimeout(() => {
            const accepted = Math.random() > 0.5;
            setTrainerPopupState(accepted ? "accepted" : "rejected");
        }, 2000);
    };

    return (
        <>
            <div className="page page--account">
                <div className="container">
                    <div className="inner">
                        <CursusCard
                            title="Aanmelden voor cursus"
                            items={cursusOptions}
                            onOpenPopup={handleOpenCursusPopup}
                        />
                        <trainerCard
                            title="Contact met trainer"
                            items={trainerOptions}
                            onOpenPopup={handleOpenTrainerPopup}
                        />
                        <AccountCard
                            title="Abonnement beheer"
                            items={accountOptions}
                        />
                    </div>
                </div>
            </div>
            <div className="page-bg"></div>
            <CursusPopup
                open={cursusPopupOpen}
                onClose={handleCloseCursusPopup}
                cursus={selectedCursus}
                onJoin={handleJoinCursus}
            />
            <TrainerPopup
                open={trainerPopupOpen}
                onClose={handleCloseTrainerPopup}
                trainer={selectedTrainer}
                state={trainerPopupState}
                onRequest={handleRequestTrainer}
            />
        </>
    );
}

export default AccountPage;