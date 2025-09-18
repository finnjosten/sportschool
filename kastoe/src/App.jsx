// Example setup
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./login-page/LoginPage";
import Account from "./account/account.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/account" element={<Account/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;