import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.scss";
import { Suspense } from "react";
import Home from "./pages/Home/Home";
import Arena from "./pages/Arena/Arena";
import Login from "./pages/Login/Login";
import Auth from "./pages/Auth/Auth";
import Signup from "./pages/Signup/Signup";
import Verification from "./pages/Verification/Verification";

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/problem" element={<Arena />} />
            <Route path="verify/:token" element={<Verification />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
