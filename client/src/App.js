import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/login" element = {<Logingin />} />
        <Route path = "/signup" element = {<Signupgnup />} />
        <Route path = "/chat" element = {<Chatat />} />
      </Routes>
    </Router>
  );
}

export default App;
