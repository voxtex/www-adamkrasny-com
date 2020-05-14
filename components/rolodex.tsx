import clsx from "clsx";
import React, { useEffect, useState } from "react";

type Props = {
  className?: string;
  height?: number;
  items: string[];
};

const Rolodex = ({ className, height = 30, items }: Props): React.ReactElement => {
  const [index, setIndex] = useState(0);
  useEffect((): (() => void) => {
    let intervalId = 0;
    const setNextIndex = (): void => {
      setIndex((val) => {
        if (val === items.length - 1) {
          window.clearInterval(intervalId);
          return 0;
        }

        return val + 1;
      });
    };

    intervalId = window.setInterval(setNextIndex, 2000);

    return (): void => window.clearInterval(intervalId);
  }, [items.length]);

  return (
    <div className={clsx("root", className)}>
      <div className="inner">
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <style jsx>
        {`
          .root {
            max-height: ${height}px;
            overflow: hidden;
          }

          .inner {
            transform: translateY(-${index * height}px);
            transition: transform 0.5s cubic-bezier(0.5, 1, 0.89, 1);
          }
        `}
      </style>
    </div>
  );
};

export default Rolodex;
