import "./accountPage.css";

function CursusCard({ title, items }) {
    return (
        <div className="wpb-card wpb-card--col wpb-card--col-cursus">
            <h3 className="wpb-card__title">{title}</h3>
            <div className="wpb-card__boxes">
                {items?.map((item, idx) => (
                    <div className="wpb-card wpb-card--box" key={idx}>{item.title}</div>
                ))}
            </div>
        </div>
    );
}

function TrainerCard({ title, items }) {
    return (
        <div className="wpb-card wpb-card--col wpb-card--col-trainer">
            <h3 className="wpb-card__title">{title}</h3>
            <div className="wpb-card__boxes">
                {items?.map((item, idx) => (
                    <div className="wpb-card wpb-card--box" key={idx}>{item.title}</div>
                ))}
            </div>
        </div>
    );
}

function AccountCard({ title, items }) {
    return (
        <div className="wpb-card wpb-card--col wpb-card--col-trainer">
            <h3 className="wpb-card__title">{title}</h3>
            <div className="wpb-card__boxes">
                {items?.map((item, idx) => (
                    <div className="wpb-card wpb-card--box" key={idx}>{item.title}</div>
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
            description: "Verhoog je abonnement naar niveau {niveau}"
        },
        {
            title: "Verlaag abonnement",
            description: "Verlaag je abonnement naar niveau {niveau}"
        },
        {
            title: "Abonnement annuleren",
            description: "Annuleer makkelijk je abonnement met de knop"
        },
        {
            title: "Uitloggen",
            description: "Loguit van je account beheer"
        }
    ];

    return (
        <div className="account-page-background">
            <div className="container">
                <div className="inner">
                    <CursusCard title="Aanmelden voor cursus" items={cursusOptions} />
                    <TrainerCard title="Contact met trainer" items={trainerOptions} />
                    <AccountCard title="Abonnement beheer" items={accountOptions} />
                </div>
            </div>
        </div>
    );
}

export default AccountPage;