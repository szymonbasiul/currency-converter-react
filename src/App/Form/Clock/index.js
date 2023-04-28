import { ClockForm } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const dateFormat = useCurrentDate();

  return (
    <ClockForm>
      {" "}
      Dzisiaj jest {""}
      {dateFormat}
    </ClockForm>
  );
};

export default Clock;
