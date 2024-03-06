import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./signup.module.scss";
import NewUserForm from "../../components/NewUserForm/NewUserForm";

export default function Signup() {
  const [verified, setVerified] = useState(false);
  const [code, setCode] = useState("");
  const verifyReferral = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (code === "abra cadabra") {
      setVerified(true);
    } else {
      alert("Wrong code");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="df jc_c">
        <div className={`df fd_c ai_c ${styles.signupContainer}`}>
          {!verified ? (
            <>
              <h1>Enter the secret spell</h1>
              <form onSubmit={verifyReferral}>
                <input
                  type="text"
                  placeholder="abra cadabra"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={!code.length}
                >
                  Submit
                </button>
              </form>
            </>
          ) : (
            <NewUserForm />
          )}
        </div>
      </div>
    </div>
  );
}
