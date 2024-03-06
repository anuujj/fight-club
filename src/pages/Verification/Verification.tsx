import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import verifyEmail from "../../services/api/verifyEmail";

export default function Verification() {
  const [message, setMessage] = useState("");
  const { token = "" } = useParams();
  useEffect(() => {
    verifyEmail(token)
      .then((res: any) => {
        setMessage(res.message);
      })
      .catch((err) => {
        setMessage(err.message);
      });
  },[]);
  return <h1 style = {{"color":"#fff"}}>{message}</h1>;
}
