import "./style.css";
import { useEffect, useState } from "react";

const Clock = () => {
  const date = new Date();
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(
        date.toLocaleTimeString("pl-PL", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })
      );
    }, 1000);

  });

  return <p className="form__time">{currentDate}</p>;
};

export default Clock;