import { useGetPath } from "./useGetPath";
import { useCallback, useEffect, useRef, useState } from "react";

const useInterval = (callback: any, delay: any) => {
  const intervalId = useRef(0);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => savedCallback.current();

    intervalId.current = window.setInterval(tick, delay);
    return () => window.clearInterval(intervalId.current);
  }, [delay]);

  return intervalId.current;
};

const useRetryUntilResolved = (callback: any, interval = 100) => {
  const [hasResolved, setHasResolved] = useState(false);
  const path = useGetPath();

  useEffect(() => {
    setHasResolved(false);
  }, [path]);
  useInterval(
    () => {
      const result = callback();
      if (result) {
        setHasResolved(true);
      }
    },
    hasResolved ? null : interval
  );
  return hasResolved;
};

export const useHideShowOnScroll = (
  scrolledComponentId: string,
  delay: number,
  typeEvent = "scroll"
) => {
  const isResolved = useRetryUntilResolved(
    () => !!document.getElementById(scrolledComponentId)
  );
  const [isVisible, setIsVisible] = useState(true);

  const setNotVisible = useCallback(() => {
    if (!isVisible) {
      return;
    }
    setIsVisible(false);
  }, [isVisible]);

  useEffect(() => {
    if (!isResolved) {
      return;
    }
    const d = document.getElementById(scrolledComponentId);
    d && d.addEventListener(typeEvent, setNotVisible);
    return () => {
      d && d.removeEventListener(typeEvent, setNotVisible);
    };
  }, [isResolved, scrolledComponentId, setNotVisible, typeEvent]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, isVisible]);

  return { isVisible };
};
