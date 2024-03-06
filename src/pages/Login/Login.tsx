import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import login from "../../services/api/login";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const isSubmitDisabled = () => {
    if (username.length > 0 && password.length > 0) {
      return false;
    }
    return true;
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(username, password)
      .then((res: any) => {
        if (res.errorCode === 401) {
          setErrorMsg("Invalid username or password");
        }else if(res.errorCode === 403){
          setErrorMsg("Please verify your email id");
        } else if (res.userId) {
          localStorage.setItem("fcSession", res.token);
          navigate("/problem");
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorMsg("Invalid username or password");
      });
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className={`df jc_c`}>
          <div className={`df fd_c ai_c ${styles.loginContainer}`}>
            <h1>Login</h1>
            <h4>Sign in to continue</h4>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUserName}
            />
            <div className={`df ${styles.password}`}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
              <button
                className={styles.showPasswordBtn}
                type="button"
                onClick={() => {
                  console.log("here");
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errorMsg !== "" && (
              <span className={styles.error}>{errorMsg}</span>
            )}
            <button
              disabled={isSubmitDisabled()}
              type="submit"
              className={styles.loginBtn}
              title={
                isSubmitDisabled()
                  ? "Please enter your username and password"
                  : ""
              }
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
