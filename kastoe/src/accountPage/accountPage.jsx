import "./accountPage.css";

function Rectangle({ title, boxes }) {
  return (
    <div className="rectangle">
      <div className="rectangle-title">{title}</div>
      <div className="box-row">
        {boxes.map((box, idx) => (
          <div className="box" key={idx}>{box}</div>
        ))}
      </div>
    </div>
  );
}

function AccountPage() {
  return (
    <div className="login-page-background">
      <div className="rectangle-row">
        <Rectangle  boxes={["Box 1", "Box 2", "Box 3"]} />
        <Rectangle  boxes={["Box 1", "Box 2", "Box 3"]} />
        <Rectangle  boxes={["Box 1", "Box 2", "Box 3"]} />
      </div>  
    </div>
  );
}

export default AccountPage;