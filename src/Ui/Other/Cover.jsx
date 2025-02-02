import { memo, useEffect, useState } from "react";

function Cover() {
  const [top, setTop] = useState(0);

  useEffect(function () {
    setTop(window.scrollY);
  }, []);
  return (
    <div
      className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full cursor-auto bg-gray-800 opacity-50 max-xl:hidden"
      style={{ top: top }}
    ></div>
  );
}

export default memo(Cover);
