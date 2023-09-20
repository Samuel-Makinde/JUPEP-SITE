import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./pages/Registration/SignUp";
import Login from "./pages/Registration/Login";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/Contact/ContactUs";
import Pricing from "./pages/Pricing-Page/Pricing";
import ScrollToTop from "./layout/ScrollToTop/ScrollToTop";
import About from "./pages/About/About";
import Syllabus from "./pages/Syllabus/Syllabus";
import VerifyPage from "./pages/Registration/verifyPage";
import UserVerifyEmail from "./pages/Registration/UserVerifyEmail";
import ForgotPassword from "./pages/Registration/ForgotPassword";
import ResetPassword from "./pages/Registration/ResetPassword";
import ViewSyllabusPage from "./pages/Syllabus/ViewSyllabusPage";


function App() {
  return (
    <div>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-email-page" element={<VerifyPage />} />
            <Route path="/user/verify-email" element={<UserVerifyEmail />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/user/reset-password" element={<ResetPassword />} />
            <Route path="/syllabus-page" element={<ViewSyllabusPage />} />
          </Routes>
        </Router>
      {/* <Home /> */}
      {/* <ContactUs /> */}
      {/* <Pricing /> */}
      {/* <PdfasImage /> */}
      {/* <h1>i amgood</h1> */}
    </div>
  );
}

export default App;
