import React, { useState, useEffect } from "react";
import "./Photos.css";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>
          <img src={photo.url} alt={photo.title} />
        </li>
      ))}
    </ul>
  );
};

export default Photos;
