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
// import UploadFile from "./pages/UploadFile";
import VerifyPage from "./pages/Registration/VerifyPage";
import Error from "./pages/Error/Error";
import ThirdPartyCookie from "./pages/ThirdPartyCookie/ThirdPartyCookie";
import VideoPage from "./pages/VideoPage/VideoPage";
import AdminLogin from "./pages/Registration/AdminLogin";
import AdminLayout from "./layout/AdminLayout";
import AdminHome from "./pages/Admin/AdminHome";
import { ComingSoon } from "./pages/ComingSoon/ComingSoon";
import EaseReadsAL from "./pages/EaseReadsAI/EaseReadsAL";
import Instruction from "./pages/ExamsPage/Instruction";
import SelectDetail from "./pages/ExamsPage/SelectDetail";
import ExamPage from "./pages/ExamsPage/ExamQuestions";

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
            <Route
              path="/view-subject/third-party-cookie"
              element={<ThirdPartyCookie />}
            />
            <Route path="/video-page" element={<VideoPage />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/easereads-ai" element={<EaseReadsAL />} />
            <Route path="/instruction" element={<Instruction />} />
            <Route path="/select-details" element={<SelectDetail />} />
            <Route path="/exam-page" element={<ExamPage />} />

            <Route path="/admin-login" element={<AdminLogin />} />

            <Route
              path="/admin/*"
              element={
                <AdminLayout>
                  <Routes>
                    <Route path="" element={<AdminHome />} />
                  </Routes>
                </AdminLayout>
              }
            />

            {/* <Route path="/file-upload" element={<UploadFile />} /> */}
            <Route path="*" element={<Error />} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
