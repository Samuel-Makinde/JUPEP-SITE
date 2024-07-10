import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { registerSW } from "virtual:pwa-register";
// import { Provider } from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

registerSW();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    <ToastContainer />
    {/* </Provider> */}
  </React.StrictMode>
);

// const updateSW = registerSW({
//   onNeedRefresh() {
//     // Show a prompt to the user to refresh the app
//     console.log("Need refresh");
//   },
//   onOfflineReady() {
//     // Show a prompt that the app is ready to work offline
//     console.log("Offline ready");
//   },
// });
// import { registerSW } from 'virtual:pwa-register';
