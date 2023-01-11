import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

interface IScrollToTop {
  showRoutes: boolean;
  children: JSX.Element;
}

const ScrollToTop = (props: IScrollToTop) => {
  const { children, showRoutes } = props;
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0,0);
  }, [location.pathname, showRoutes]);
  return children;
};

export default ScrollToTop;
