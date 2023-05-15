// import { Route, Routes, BrowserRouter } from "react-router-dom";

//components
import React from "react";
import axios from "axios";
import Routes from "./Routes.js";

// import Header from "./components/Header";
// import MsgBar from "./components/MsgBar";
// import Chatt from "./components/Chatt";
// import Right from "./components/Right";
// import Home from "./Pages/Home";

// import Login from "./Pages/Login";
import { UserContextProvider } from "./context/UserContext.js";

// import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar";

function App() {
  axios.defaults.baseURL = "http://localhost:4040";
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/">
    //       <Route path="register" element={<Register />} />
    //       <Route path="login" element={<Login />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    // // <div className="overflow-hidden">
    // <BrowserRouter>
    //   {/* <Router> */}
    //   {/* <Header /> */}

    //   <Routes>
    //     <Route path="login" element={<Login />} />
    //     <Route path="Register" element={<Register />} />

    //     {/* <Route path={"/"} element={<MsgBar />} />
    //       <Route path="/Chatt" element={<Chatt />} /> */}
    //   </Routes>
    //   {/* <MsgBar />
    //     <Chatt />
    //     <Right /> */}
    //   {/* <Footer /> */}
    //   {/* </Router> */}
    //   {/* </div> */}
    // </BrowserRouter>
  );
}

export default App;
