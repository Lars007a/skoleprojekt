import styles from "./newsletterBox.module.css";
import Container from "../container/container.jsx";
import { useRef, useState } from "react";

export default function newsletterBox() {
  const [showMsg, setShowMsg] = useState(false);
  const [msgMessage, setMsgMessage] = useState("");
  const [msgColor, setMsgColor] = useState();
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputVal.length < 2) {
      setShowMsg(true);
      setMsgMessage("Skal være mere end 2 bogstaver!");
      setMsgColor("red");
      return;
    }

    try {
      let resp = await fetch("https://api-medieskolerne.vercel.app/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: inputVal }),
      });

      let jsonresp = await resp.json();

      setShowMsg(true);
      setMsgMessage("Email tilføjet!");
      setMsgColor("#4BB543");

      console.log(jsonresp);
    } catch (error) {
      console.log(error.Message);
    }
  };

  const handleChange = (event) => {
    setInputVal(event.target.value);
  };

  return (
    <>
      <div className={styles.newsletterBox}>
        <Container>
          {showMsg ? (
            <div className={styles.msg} style={{ backgroundColor: msgColor }}>
              {msgMessage}
            </div>
          ) : (
            ""
          )}
          <div className={styles.content}>
            <h2>Tilmeld dig nyhedsbrevet!</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Din email..."
                value={inputVal}
                onChange={handleChange}
              />
              <input type="submit" value="Tilmeld" />
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}
