import { useEffect, useState } from "react";
import { ClockForm } from "./styled";

const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const dateFormat = currentDate.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <ClockForm>
      {" "}
      Dzisiaj jest {""}
      {dateFormat}
    </ClockForm>
  );
};

export default Clock;
