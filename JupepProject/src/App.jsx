import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/AuthContext";

import SignUp from "./pages/SignUP/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import PdfasImage from "./pages/PDF/PdfasImage";
function App() {
  return (
    <div>
      {/* <UserProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} /> 
             <Route path="/" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </UserProvider> */}
      <Home />
      {/* <PdfasImage /> */}
      {/* <h1>i amgood</h1> */}
    </div>
  );
}

export default App;
