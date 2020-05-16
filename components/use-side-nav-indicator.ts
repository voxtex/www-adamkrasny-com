import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

const INDICATOR_CLASS_NAMES_BY_KEY: { [key: string]: string } = {
  "/": "bg-red-600",
  "/career": "bg-green-600",
  "/blog": "bg-blue-600",
  "/adamrc": "bg-yellow-600",
  "contact-buttons": "bg-purple-600",
  default: "bg-white",
};

const getElementKey = (el: HTMLElement): string => {
  return el.getAttribute("href") ?? el.getAttribute("id") ?? "default";
};

type UseSideNavIndicatorResult = {
  handleMouseEnter: (e: React.MouseEvent<HTMLAnchorElement | HTMLElement>) => void;
  handleMouseLeave: () => void;
  indicatorProps: null | { width: number; x: number; y: number; indicatorClassName: string; height: number };
  registerAnchorElement: (el: HTMLAnchorElement) => void;
};

const useSideNavIndicator = (): UseSideNavIndicatorResult => {
  const { pathname } = useRouter();
  const firstPathPart = "/" + pathname.split("/")[1];

  const elementsByHrefRef = useRef<{ [key: string]: HTMLAnchorElement }>({});
  const [indicatedElement, setIndicatedElement] = useState<HTMLElement>();

  const resetIndicator = useCallback(() => {
    const defaultIndicatedElement = Object.entries(elementsByHrefRef.current).find(
      ([href]) => firstPathPart === href,
    )?.[1];

    if (defaultIndicatedElement) {
      setIndicatedElement(defaultIndicatedElement);
    }
  }, [firstPathPart]);

  useEffect(() => {
    resetIndicator();
  }, [resetIndicator]);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLElement>) => {
    setIndicatedElement(e.currentTarget);
  }, []);

  const handleMouseLeave = useCallback(() => {
    resetIndicator();
  }, [resetIndicator]);

  const indicatorProps = useMemo(() => {
    if (!indicatedElement) {
      return null;
    }

    const boundingClientRect = indicatedElement.getBoundingClientRect();
    const indicatorClassName = INDICATOR_CLASS_NAMES_BY_KEY[getElementKey(indicatedElement)];
    return {
      height: boundingClientRect.height,
      indicatorClassName,
      width: boundingClientRect.width,
      x: boundingClientRect.x,
      y: boundingClientRect.y,
    };
  }, [indicatedElement]);

  const registerAnchorElement = useCallback(
    (el: HTMLAnchorElement) => {
      if (!el) {
        return;
      }

      const elementKey = getElementKey(el);
      const oldElement = elementsByHrefRef.current[elementKey];
      elementsByHrefRef.current[elementKey] = el;

      if (!oldElement && firstPathPart === elementKey) {
        resetIndicator();
      }
    },
    [firstPathPart, resetIndicator],
  );

  return useMemo(
    () => ({
      handleMouseEnter,
      handleMouseLeave,
      indicatorProps,
      registerAnchorElement,
    }),
    [handleMouseEnter, handleMouseLeave, indicatorProps, registerAnchorElement],
  );
};

export default useSideNavIndicator;
