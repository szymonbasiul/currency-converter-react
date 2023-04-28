import { ClockForm } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const formattedDate = useCurrentDate();

  return (
    <ClockForm>
      {" "}
      Dzisiaj jest {""}
      {formattedDate}
    </ClockForm>
  );
};

export default Clock;
