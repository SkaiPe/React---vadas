import { useState } from "react";
import "./Reflection.css";

const Reflection = () => {
  const [message] = useState("Kaip sekėsi atlikti užduotį?");

  const setImage1 = (smile) => {
    setImage1("./src/images/smile.jpg");
  };
  const setImage2 = () => {
    setImage2("./src/images/crazy.jpg");
  };
  const setImage3 = () => {
    setImage3("./src/images/cry.jpg");
  };

  return (
    <div>
      <h2>{message}</h2>
      <button className="smile" onClick={setImage1}>
        Ačiū, gerai
      </button>
      <button className="crazy" onClick={setImage2}>
        Na ir pasitūsinau
      </button>
      <button className="cry..." onClick={setImage3}>
        Ne kažką
      </button>
    </div>
  );
};
export default Reflection;
