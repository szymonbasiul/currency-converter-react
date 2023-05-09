import { ClockForm } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const {currentDate} = useCurrentDate();

  const formattedDate = currentDate.toLocaleDateString(undefined, {
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
      {formattedDate}
    </ClockForm>
  );
};

export default Clock;
