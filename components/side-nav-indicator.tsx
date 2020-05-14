import clsx from "clsx";
import React from "react";

type Props = {
  className?: string;
  height?: number;
  horizontal?: boolean;
  indicatorClassName?: string;
  width?: number;
  x?: number;
  y?: number;
};

const SideNavIndicator = ({
  className,
  height = 48,
  horizontal,
  indicatorClassName = "bg-white",
  width = 48,
  x,
  y,
}: Props): React.ReactElement | null => {
  if (y === undefined) {
    return null;
  }

  return (
    <div className={clsx("h-full", className)}>
      <div
        className={clsx("indicator", indicatorClassName)}
        style={{
          height: horizontal ? "100%" : height,
          width: horizontal ? width : "100%",
          transform: horizontal ? `translateX(${x}px)` : `translateY(${y}px)`,
        }}
      />

      <style jsx>
        {`
          .indicator {
            transition: background-color 1s cubic-bezier(0.19, 1, 0.22, 1), transform 1s cubic-bezier(0.19, 1, 0.22, 1),
              height 1s cubic-bezier(0.19, 1, 0.22, 1), width 1s cubic-bezier(0.19, 1, 0.22, 1);
          }
        `}
      </style>
    </div>
  );
};

export default SideNavIndicator;
