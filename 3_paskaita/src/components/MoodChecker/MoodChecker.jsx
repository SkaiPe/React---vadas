import { useState } from "react";
import "./MoodChecker.css";

const MoodChecker = () => {
  const [message, setMessage] = useState("Kaip jaučiatės?");

  const handleMessage1 = () => {
    setMessage("- Nieko tokio, viskas bus gerai");
  };

  const handleMessage2 = () => {
    setMessage("- Gerai, nujaučiu, kad greitu metu jausitės puikiai");
  };

  const handleMessage3 = () => {
    setMessage("- Smagu girdėti, taip ir toliau");
  };

  return (
    <div>
      <h2>{message}</h2>
      <button className="button" onClick={handleMessage1}>
        Jaučiuosi prastai
      </button>
      <button className="button" onClick={handleMessage2}>
        Jaučiuosi normaliai
      </button>
      <button className="button" onClick={handleMessage3}>
        Jaučiuosi puikiai
      </button>
    </div>
  );
};

export default MoodChecker;
