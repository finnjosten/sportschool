import "./accountPage.css";

import { FaXmark } from "react-icons/fa6";
import { FaArrowUp, FaArrowDown, FaCheck, FaSignOutAlt, FaPaperPlane, FaPlus  } from "react-icons/fa";

const iconSize = 16;

function CursusCard({ title, items }) {
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
                            <span className="icon-wrapper">
                                <FaPlus size={iconSize} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function TrainerCard({ title, items }) {
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
                            <span className="icon-wrapper">
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
                            <span className="icon-wrapper">
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
    const cursusOptions = [
        {
            title: "Yoga cursus",
            description: "Woensdag 19 januari is er een yoga cursus om 21:00"
        },
        {
            title: "Yoga cursus",
            description: "Woensdag 19 januari is er een yoga cursus om 21:00"
        },
        {
            title: "Yoga cursus",
            description: "Woensdag 19 januari is er een yoga cursus om 21:00"
        },
        {
            title: "Yoga cursus",
            description: "Woensdag 19 januari is er een yoga cursus om 21:00"
        },
        {
            title: "Yoga cursus",
            description: "Woensdag 19 januari is er een yoga cursus om 21:00"
        },
        {
            title: "Yoga cursus",
            description: "Woensdag 19 januari is er een yoga cursus om 21:00"
        },
        {
            title: "Yoga cursus",
            description: "Woensdag 19 januari is er een yoga cursus om 21:00"
        },
        {
            title: "Yoga cursus",
            description: "Woensdag 19 januari is er een yoga cursus om 21:00"
        },
        {
            title: "Yoga cursus",
            description: "Woensdag 19 januari is er een yoga cursus om 21:00"
        },
        {
            title: "Yoga cursus",
            description: "Woensdag 19 januari is er een yoga cursus om 21:00"
        },
        {
            title: "Yoga cursus",
            description: "Woensdag 19 januari is er een yoga cursus om 21:00"
        },
    ];
    const trainerOptions = [
        {
            title: "John doe",
            description: "Personal trainer specialized in body building"
        },
        {
            title: "John doe",
            description: "Personal trainer specialized in body building"
        },
        {
            title: "John doe",
            description: "Personal trainer specialized in body building"
        },
        {
            title: "John doe",
            description: "Personal trainer specialized in body building"
        },
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

    return (
        <>
            <div className="page page--account">
                <div className="container">
                    <div className="inner">
                        <CursusCard title="Aanmelden voor cursus" items={cursusOptions} />
                        <TrainerCard title="Contact met trainer" items={trainerOptions} />
                        <AccountCard title="Abonnement beheer" items={accountOptions} />
                    </div>
                </div>
            </div>
            <div className="page-bg"></div>
        </>
    );
}

export default AccountPage;