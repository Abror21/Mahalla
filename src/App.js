import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import SecureRouter from "layouts/SecureRouter";
import DashboardPage from "pages/DashboardPage";
import AddUserPage from "pages/AddUserPage";
import PassportsListPage from "pages/PassportsListPage";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";
import AddClassificationPage from "pages/AddClassificationPage";
import PassportPage from "pages/PassportPage";
import AppProvider from "Data/ContextData";

const App = () => {

  return (
    <AppProvider>
      <BrowserRouter>
        <Router basename="/Mahalla">
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/dashboard" element={<SecureRouter>{<DashboardPage />}</SecureRouter>} />
            <Route path="/add-user" element={<SecureRouter>{<AddUserPage />}</SecureRouter>} />
            <Route path="/classification" element={<SecureRouter>{<AddClassificationPage />}</SecureRouter>} />
            <Route path="/passports-list" element={<SecureRouter>{<PassportsListPage />}</SecureRouter>} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/passport" element={<PassportPage />} />
          </Routes>
        </Router>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
