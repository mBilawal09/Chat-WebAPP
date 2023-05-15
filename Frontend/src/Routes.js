import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Home from "./components/Home";
import RegisterAndLoginForm from "./Pages/RegisterAndLoginForm";
// import Chat from "./Chat";

export default function Routes() {
  const { username, id } = useContext(UserContext);

  if (username) {
    return <Home />;
  }
  return <RegisterAndLoginForm />;
}
