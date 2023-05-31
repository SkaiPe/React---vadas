import React, { useState } from "react";
import "./WeightConverter.css";

function WeightConverter() {
  const [inputValue, setInputValue] = useState("");
  const [tons, setTons] = useState("");
  const [grams, setGrams] = useState("");
  const [pounds, setPounds] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleConvert = () => {
    const kilograms = parseFloat(inputValue);

    const convertedTons = (kilograms * 0.001).toFixed(3);
    const convertedGrams = (kilograms * 1000).toFixed(1);
    const convertedPounds = (kilograms * 2.20462262185).toFixed(2);

    setTons(convertedTons);
    setGrams(convertedGrams);
    setPounds(convertedPounds);
  };

  return (
    <div>
      <h2>Kilogramų konvertavimas</h2>
      <label>
        Įveskite kilogramų skaičių:
        <input type="number" value={inputValue} onChange={handleInputChange} />
      </label>
      <button onClick={handleConvert}>Konvertuoti</button>
      <div>
        <p>Tonos: {tons} t</p>
        <p>Gramai: {grams} g</p>
        <p>Pundai: {pounds} lb</p>
      </div>
    </div>
  );
}

export default WeightConverter;
