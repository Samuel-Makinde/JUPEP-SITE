import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserProvider } from "./context/AuthContext";
// user authentication routes
import SignUp from "./pages/Registration/SignUp";
import Login from "./pages/Registration/Login";
import ForgotPassword from "./pages/Registration/ForgotPassword";
import ResetPassword from "./pages/Registration/ResetPassword";
import UserVerifyEmail from "./pages/Registration/UserVerifyEmail";
import VerifyPage from "./pages/Registration/VerifyPage";

// user landing page routes
import Home from "./pages/Home/Home";
import ContactUs from "./pages/Contact/ContactUs";
import Pricing from "./pages/Pricing-Page/Pricing";
import ScrollToTop from "./layout/ScrollToTop/ScrollToTop";
import About from "./pages/About/About";
import Syllabus from "./pages/Syllabus/Syllabus";
import TermOfUse from "./pages/Regulation/TermOfUse";
import PrivacyPolicy from "./pages/Regulation/PrivacyPolicy";

import ViewSubject from "./pages/ViewSubject/ViewSubject";
// import UploadFile from "./pages/UploadFile";

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
import Paystack from "./pages/paystack";
import AdminUsers from "./pages/Admin/Users";
import AdminTransaction from "./pages/Admin/AdminTransaction";
import AdminMessages from "./pages/Admin/AdminMessages";
import AdminSupport from "./pages/Admin/AdminSupport";
import AdminSubscribtion from "./pages/Admin/AdminSubscribtion";
import Book from "./pages/Home/Books/Book";
import Video from "./pages/Home/Video/Video";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Exams } from "./pages/Home/Exams/Exams";
import Landing from "./pages/UserDashboard/LandingPage/Landing";

// login user routes
import UserLayout from "./layout/UserLayout";
import Dashboard from "./pages/UserDashboard/Dashboard/Dashboard";
import MyBooks from "./pages/UserDashboard/Dashboard/myBook";
import MyVideos from "./pages/UserDashboard/Dashboard/MyVideos";
import MyExams from "./pages/UserDashboard/Dashboard/MyExams";
import MySubscription from "./pages/UserDashboard/Dashboard/MySubscription";
import MyHelpCenter from "./pages/UserDashboard/Dashboard/HelpCenter";
import ProfileHeader from "./components/UserProfileHeader";
import Toastify from "./components/Toastify";

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Check if the button should be shown based on the date
    const lastShownDate = localStorage.getItem("installPromptLastShownDate");
    const currentDate = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format

    if (lastShownDate !== currentDate) {
      setIsInstallable(true);
      localStorage.setItem("installPromptLastShownDate", currentDate);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
        setIsInstallable(false);
      });
    }
  };

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
            {/* <Route path="/easereads-ai" element={<EaseReadsAL />} /> */}
            <Route path="/instruction" element={<Instruction />} />
            <Route path="/select-details" element={<SelectDetail />} />
            <Route path="/exam-page" element={<ExamPage />} />

            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/payment" element={<Paystack />} />
            <Route path="/read-books" element={<Book />} />
            <Route path="/watch-videos" element={<Video />} />
            <Route path="/practice-exam" element={<Exams />} />

            {/* user landing page and dashboard */}
            <Route path="/user" element={<Landing />} />
            <Route
              path="/user/*"
              element={
                <UserLayout>
                  <ProfileHeader />
                  <Toastify message="To move up your rank, enage in reading textbooks, watching tutorial video, practice exams and create study plan" />
                  <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="dashboard/my-learning" element={<MyBooks />} />
                    <Route path="dashboard/my-videos" element={<MyVideos />} />
                    <Route
                      path="dashboard/exam-practice"
                      element={<MyExams />}
                    />
                    <Route
                      path="dashboard/subscriptions"
                      element={<MySubscription />}
                    />
                    <Route
                      path="dashboard/help-center"
                      element={<MyHelpCenter />}
                    />
                  </Routes>
                </UserLayout>
              }
            />

            {/*admin route*/}
            <Route
              path="/admin/*"
              element={
                <AdminLayout>
                  <Routes>
                    <Route path="dashboard" element={<AdminHome />} />
                    <Route path="users" element={<AdminUsers />} />
                    <Route path="transaction" element={<AdminTransaction />} />
                    <Route
                      path="subscription"
                      element={<AdminSubscribtion />}
                    />
                    <Route path="messages" element={<AdminMessages />} />
                    <Route path="support" element={<AdminSupport />} />
                  </Routes>
                </AdminLayout>
              }
            />

            {/* <Route path="/file-upload" element={<UploadFile />} /> */}
            <Route path="*" element={<Error />} />
          </Routes>
        </UserProvider>
      </Router>
      {isInstallable && (
        <button
          className="z-30"
          onClick={handleInstallClick}
          style={installButtonStyles}
        >
          Install Easereads
        </button>
      )}
    </div>
  );
}

const installButtonStyles = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
export default App;
