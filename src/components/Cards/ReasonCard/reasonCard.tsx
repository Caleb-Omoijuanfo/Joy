import { useState } from "react";

import Swal from "sweetalert2";
import { data } from "../../../data";

import "./reasonCard.css";

interface Reason {
  id: number;
  content: string;
}

const ReasonCard = () => {
  const [reasons] = useState<Reason[]>(data);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    const totalNumberOfReasons = reasons.length - 1;

    if (index < totalNumberOfReasons) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      Swal.fire({
        title: "The End",
        text: "I love you so much 😭. Start again?",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          setIndex(0);
        }
      });
    }
  };

  return (
    <div className="reason-card">
      <h5 className="title">10 REASONS WHY I LOVE YOU #{reasons[index].id}</h5>
      <div className="reason-container">
        <p>"{reasons[index]?.content}"</p>
      </div>

      <span className="divider" />
      <div className="random-button-container">
        <span className="random-button" onClick={handleClick} />
      </div>
    </div>
  );
};

export default ReasonCard;
