import { useEffect, useState } from "react";

export default function useScrollSituation() {
  const [scrollSituation, setScrollSituation] = useState(null);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    function scrollHandler() {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScroll >= lastScroll ) {
        setScrollSituation("down");
      } else {
        setScrollSituation("up");
      }

      setLastScroll(currentScroll <= 0 ? 0 : currentScroll);
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [lastScroll]);

  return scrollSituation;
}
