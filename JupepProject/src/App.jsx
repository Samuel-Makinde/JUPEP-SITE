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
import { UserProvider } from "./context/AuthContext";


function App() {
  return (
    <div>
        <Router>
      <UserProvider>
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

          </Routes>
      </UserProvider>
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
