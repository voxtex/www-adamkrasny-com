import clsx from "clsx";
import React from "react";

type Props = {
  className?: string;
  indicatorClassName?: string;
  height?: number;
  y?: number;
};

const SideNavIndicator = ({
  className,
  height = 48,
  indicatorClassName = "bg-white",
  y,
}: Props): React.ReactElement | null => {
  if (y === undefined) {
    return null;
  }

  return (
    <div className={clsx(className)}>
      <div
        className={clsx("indicator w-full", indicatorClassName)}
        style={{ height, transform: `translateY(${y}px)` }}
      />

      <style jsx>
        {`
          .indicator {
            height: 1px;
            transition: background-color 1s cubic-bezier(0.19, 1, 0.22, 1), transform 1s cubic-bezier(0.19, 1, 0.22, 1),
              height 1s cubic-bezier(0.19, 1, 0.22, 1);
          }
        `}
      </style>
    </div>
  );
};

export default SideNavIndicator;
