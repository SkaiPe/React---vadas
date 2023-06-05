import { useState, useEffect } from "react";
import Card from "./Card";
import "./Cards.css";

const Cards = () => {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=10")
      .then((resp) => resp.json())
      .then((response) => {
        setPics(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const picItems = pics.map((pic) => (
    <Card url={pic.download_url} title={pic.author} key={`${pic.id}`} />
  ));

  return <div className="cardsDiv">{picItems}</div>;
};

export default Cards;
