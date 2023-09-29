import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./pages/Registration/SignUp";
import Login from "./pages/Registration/Login";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/Contact/ContactUs";
import Pricing from "./pages/Pricing-Page/Pricing";
import ScrollToTop from "./layout/ScrollToTop/ScrollToTop";
import About from "./pages/About/About";
import Syllabus from "./pages/Syllabus/Syllabus";
import UserVerifyEmail from "./pages/Registration/UserVerifyEmail";
import { UserProvider } from "./context/AuthContext";
import TermOfUse from "./pages/Regulation/TermOfUse";
import PrivacyPolicy from "./pages/Regulation/PrivacyPolicy";
import ForgotPassword from "./pages/Registration/ForgotPassword";
import ResetPassword from "./pages/Registration/ResetPassword";
import ViewSubject from "./pages/ViewSubject/ViewSubject";
import UploadFile from "./pages/UploadFile";
import VerifyPage from "./pages/Registration/VerifyPage";


function App() {
  return (
    <div>
        <Router>
      <UserProvider>
           <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/user/reset-password" element={<ResetPassword />} />
            <Route path="/term-of-use" element={<TermOfUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/verify-email-page" element={<VerifyPage />} />
            <Route path="/user/verify-email" element={<UserVerifyEmail />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/view-subject" element={<ViewSubject />} />
            <Route path="/file-upload" element={<UploadFile />} />



          </Routes> 
      </UserProvider>
        </Router>
      
    </div>
  );
}

export default App;
