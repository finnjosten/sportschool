import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import "./LoginPage.css";
import logo from "../assets/images/Logo.svg";
import { IoCheckmarkOutline, IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

function LoginPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pin, setPin] = useState("");
    const navigate = useNavigate(); // Add this line

    const handleManualClick = () => {
        setIsModalOpen(true);
        setPin(""); // Reset PIN when opening
    };

    const handleCloseModal = () => setIsModalOpen(false);

    const handlePinButtonClick = (number) => {
        if (pin.length >= 9 && !pin.includes('.')) return;

        let newPin = pin.replace(/\./g, '');
        newPin += number;
        newPin = fillWhiteSpaces(newPin, 9);
        setPin(newPin);
    };

    const handlePinConfirm = () => {
        if (pin.includes('.')) {
            alert("Please enter a complete PIN.");
            return;
        }

        // Redirect to accountbeheer page
        navigate("/account"); // Add this line
        handleCloseModal();
    };

    const handlePinDelete = () => {
        let newPin = pin.replace(/\./g, '');
        newPin = newPin.slice(0, -1);
        newPin = fillWhiteSpaces(newPin, 9);
        setPin(newPin);
    };

    const fillWhiteSpaces = (str, length) => {
        return str.padEnd(length, ".");
    }

    return (
        <>
            <div className="page page--login">
                <div className="card card--login">

                    <img src={logo} alt="Logo" className="logo" />
                    <h2 className="auto-scan">Scan uw pas</h2>
                    <div className="btn-group">
                        <button className="btn btn--secondary" onClick={handleManualClick}>Handmatig</button>
                    </div>

                </div>
            </div>

            <div className="page-bg"></div>

            <div className={`modal-overlay ${isModalOpen ? "--active" : ""}`}>
                <div className="modal">
                    <div className="keypad">
                        <div className="keypad__header">
                            <input className="pass-number" value={pin || "........."} readOnly />
                        </div>

                        <div className="keyboard">
                            <div className="keyboard__numbers">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                                    <button
                                        key={number}
                                        className="keyboard__number"
                                        onClick={() => handlePinButtonClick(number)}
                                    >
                                        {number}
                                    </button>
                                ))}
                            </div>
                            <div className="keyboard__actions">
                                <button className="keyboard__action" onClick={handlePinDelete}>
                                    <FaDeleteLeft size={32} />
                                </button>
                                <button className="keyboard__action" onClick={handlePinConfirm}>
                                    <FaCheck size={32} />
                                </button>
                                <button className="keyboard__action" onClick={handleCloseModal}>
                                    <FaXmark size={32} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
