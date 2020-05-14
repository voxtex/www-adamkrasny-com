import { format, parseISO } from "date-fns";
import React from "react";

type Props = {
  className?: string;
  dateString: string;
};

const DateFormatter = ({ className, dateString }: Props): React.ReactElement => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className={className}>
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
};

export default DateFormatter;
