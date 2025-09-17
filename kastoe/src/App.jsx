// Example setup
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./login-page/LoginPage";
import AccountBeheer from "./account_beheer/accountbeheer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/accountbeheer" element={<AccountBeheer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;