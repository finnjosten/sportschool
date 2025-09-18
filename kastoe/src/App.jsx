// Example setup
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./loginPage/LoginPage.jsx";
import AccountPage from "./accountPage/accountPage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/account" element={<AccountPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;