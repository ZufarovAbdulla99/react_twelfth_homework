import Button from "./Button.jsx";
import { sculptureList } from "./data.js";
import { useState } from "react";

export default function Gallery() {
  let [index, setIndex] = useState(0);
  let sculpture = sculptureList[index];

  return (
    <>
      <button
        onClick={() =>
          setIndex((index) =>
            index === 0 ? sculptureList.length - 1 : index - 1
          )
        }
      >
        Previous
      </button>
      <button
        onClick={() => {setIndex((index) => (index + 1) % sculptureList.length);}}
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
      <Button />
    </>
  );
}
