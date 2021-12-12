import { FC } from "react";
import { format } from "date-fns";

interface Props {
  date: string;
}

const DateComponent: FC<Props> = ({ date }: Props) => {
  const currentYear = new Date().getFullYear();
  const contentYear = new Date(date).getFullYear();
  const currentFormat = currentYear === contentYear ? "dd MMMM" : "dd MMMM yyyy";
  return <span className="date">{format(new Date(date), currentFormat)}</span>;
};

export default DateComponent;
