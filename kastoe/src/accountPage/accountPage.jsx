import "./accountPage.css";

function Rectangle({ title, boxes }) {
    return (
        <div className="wpb-card wpb-card--col">
            <h3 className="wpb-card__title">{title}</h3>
            <div className="wpb-card__boxes">
                {boxes?.map((box, idx) => (
                    <div className="wpb-card wpb-card--box" key={idx}>{box}</div>
                ))}
            </div>
        </div>
    );
}

function AccountPage() {
    return (
        <div className="account-page-background">
            <div className="container">
                <div className="inner">
                    <Rectangle title="Aanmelden voor cursus" boxes={["Workout 1", "Workout 2", "Workout 3"]} />
                    <Rectangle title="Contact met trainer" boxes={["Voeding 1", "Voeding 2", "Voeding 3"]} />
                    <Rectangle title="Abonnement beheer" boxes={["Progressie 1", "Progressie 2", "Progressie 3"]} />
                </div>
            </div>
        </div>
    );
}

export default AccountPage;