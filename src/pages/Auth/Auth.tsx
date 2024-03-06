import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./auth.module.scss";
export default function Auth() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div>
      <Navbar />
      <div className="df jc_c">
        <div className={`df fd_c ai_c ${styles.authContainer}`}>
          <h1>Welcome to our secret lair</h1>
          <div className={`${styles.options}`}>
            <button onClick={handleLogin}>Do we know you?</button>
            <button onClick={handleSignup}>No Sir</button>
          </div>
        </div>
      </div>
    </div>
  );
}
