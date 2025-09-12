import { useState } from "react";
import "./LoginPage.css";
import logo from "../assets/images/Logo.png"; // Make sure Logo.png is in your src/assets folder
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function LoginPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pin, setPin] = useState("");

  const handleManualClick = () => {
    setIsModalOpen(true);
    setPin(""); // Reset PIN when opening
  };

  const handleConfirmClick = () => {
    alert("Bevestig clicked");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePinButtonClick = (number) => {
    setPin((prevPin) => prevPin + number);
  };

  const handlePinConfirm = () => {
    alert(`PIN confirmed: ${pin}`);
    handleCloseModal();
  };

  return (
    <>
      <div className="login-page-background">
        <div className="login-form-container">
          <div className="login-content">
            <img src={logo} alt="Logo" className="logo-image" />
            <h2>Scan uw pas</h2>

            <div className="button-container">
              <button onClick={handleManualClick}>Handmatig</button>
              <button onClick={handleConfirmClick}>Bevestig</button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Voer uw code in</h3>
            <div className="pin-display">{pin || "..."}</div>
            <div className="keypad-body">
              <div className="keypad-grid">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                  <button
                    key={number}
                    className="keypad-button"
                    onClick={() => handlePinButtonClick(number)}
                  >
                    {number}
                  </button>
                ))}
              </div>
              <div className="keypad-actions">
                <button
                  onClick={handlePinConfirm}
                  className="action-button confirm"
                >
                  <IoCheckmarkOutline size={54} />
                </button>
                <button
                  onClick={handleCloseModal}
                  className="action-button cancel"
                >
                  <IoClose size={54} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPage;
