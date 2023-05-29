import { useState } from "react";
import "./Reflection.css";
import smile from "../../images/smile.jpg";
import crazy from "../../images/crazy.jpg";
import cry from "../../images/cry.png";

const Reflection = () => {
  const [message] = useState("Kaip sekėsi atlikti užduotį?");
  const [image, setImage] = useState(null);
  const setImage1 = () => {
    setImage(0);
  };
  const setImage2 = () => {
    setImage(1);
  };
  const setImage3 = () => {
    setImage(2);
  };

  return (
    <div>
      <h2>{message}</h2>
      <button className="smile" onClick={setImage1}>
        Ačiū, gerai :)
      </button>
      <button className="crazy" onClick={setImage2}>
        Na ir pasitūsinau ;-)
      </button>
      <button className="cry" onClick={setImage3}>
        Ne kažką :(
      </button>
      {image === 0 && <img src={smile} alt="smile" />}
      {image === 0 && <img src={crazy} alt="crazy" />}
      {image === 0 && <img src={cry} alt="cry" />}
    </div>
  );
};
export default Reflection;
