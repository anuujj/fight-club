import { useCallback, useState } from "react";
import styles from "./NewUserForm.module.scss";
import checkUsername from "../../services/api/checkUsername";
import { debounce } from "../../utils";
import signup from "../../services/api/signup";

export default function NewUserForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState("");
  const isUsernameUnique = (username: string) => {
    checkUsername(username)
      .then((res: any) => {
        console.log("res", res);
        setUsernameAvailable("available");
      })
      .catch((err) => {
        if(username === "") setUsernameAvailable("");
        else setUsernameAvailable("not available");
        console.error(err);
      });
  };
  const debouncedUsernameCheck = useCallback(
    debounce(isUsernameUnique, 1000),
    []
  );
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameAvailable("");
    setUsername(e.target.value);
    debouncedUsernameCheck(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const usernameHelperText = () => {
    if (usernameAvailable === "") {
      return "";
    } else if (usernameAvailable === "available") {
      return <div className={styles.validStatus}>✅</div>;
    } else {
      return <div className={styles.validStatus}>❌</div>;
    }
  };
  const handleSignup = ()=>{
    signup(username, password, email).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.error(err);
    });
  }
  return (
    <>
      <h1>Join the bracket family</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleEmail}
      />
      <div className={styles.username}>
        <input
          type="text"
          placeholder="Unique username"
          value={username}
          onChange={handleUsername}
        />
        {usernameHelperText()}
      </div>
      <div className={`df ${styles.password}`}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <button
          className={styles.showPasswordBtn}
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <button onClick={handleSignup}>Signup</button>
    </>
  );
}
