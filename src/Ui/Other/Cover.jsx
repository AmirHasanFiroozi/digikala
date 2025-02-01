import { memo } from "react";

function Cover() {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full cursor-auto bg-gray-800 opacity-50 max-xl:hidden"></div>
  );
}

export default memo(Cover);
