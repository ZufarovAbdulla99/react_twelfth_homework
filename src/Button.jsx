import { useEffect, useState } from "react";

function Button() {
  const [isConfirmed, setIsConfirmed] = useState("not confirmed");

  function handleClick(e) {
    setIsConfirmed("confirmed");
    e.target.textContent = "Confirmed";
  }

  return (
    <div>
      <button disabled={isConfirmed === "confirmed" ? true : false}
        onClick={(e) => handleClick(e)}
      >
        Not Confirmed
      </button>
    </div>
  );
}

export default Button;
