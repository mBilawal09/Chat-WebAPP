import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import SidebarProvider from "./context/SidebarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <SidebarProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // {/* </SidebarProvider> */}
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
