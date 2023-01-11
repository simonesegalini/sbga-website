import {useState, useEffect} from "react";
import {useDimensions} from "./useDimensions";

export const usePageBottom = () => {
  const { window: p } = useDimensions();
  const { height: h } = p;

  const [reachedBottom, setReachedBottom] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = document.getElementById('root')
    if(!el) {
      return
    }
    setHeight(el.offsetHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if(height === 0) {
        return
      }
      const scrollTop = document.documentElement.scrollTop;

      const hasReachedBottom = height - (h+ scrollTop) <= 5;

      setReachedBottom(hasReachedBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [h, height]);

  return reachedBottom
};
