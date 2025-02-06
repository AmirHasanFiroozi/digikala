import { useEffect, useRef, useState } from "react";
import useSize from "../../../Hooks/useSize";
import { FleshBottom, FleshTop, Like, Star , DisLike } from "../../../Ui/SVGs/Svg";
import toPersianNumber from "../../../services/toPersianNumber";

/* eslint-disable react/prop-types */
function ProductComment({ comment }) {
  const [Continue, setContinue] = useState(false);
  const [textHeight, setTextHeight] = useState(0);
  const [like , setLike] = useState(0);
  const [width] = useSize();
  const paragraph = useRef(null);

  useEffect(
    function () {
      setTextHeight(paragraph.current.offsetHeight);
    },
    [width],
  );

  function showTextHandler() {
    setContinue((con) => !con);
  }

  return (
    <div className="border-b-2 border-[var(--color-gray2)] py-4">
      <div className="flex items-center gap-3 text-[10px] text-[var(--color-gray3)]">
        <span>
          {comment.is_anonymous === true
            ? "کاربر دیجی کالا"
            : `${comment.user_name}`}
        </span>
        <span
          className={`rounded-2xl bg-green-100 px-2 py-0.5 text-green-700 ${comment.is_buyer ? "block" : "hidden"}`}
        >
          خریدار
        </span>
        <span className="h-1 w-1 rounded-full bg-[var(--color-gray3)]"></span>
        <span>{comment.created_at}</span>
      </div>
      <div className={`mt-2 ${comment.rate === 0 ? "hidden" : "flex"}`}>
        {Array.from({ length: comment.rate }).map((_, i) => (
          <Star key={i} />
        ))}
      </div>
      <div
        className="relative z-10 h-full overflow-hidden py-2"
        style={{
          maxHeight: Continue ? `${textHeight + 50}px` : "80px",
          transitionDuration: "0.5s",
        }}
      >
        <p ref={paragraph} className={`text-justify text-[14px]`}>
          <div
            className={`absolute top-0 left-0 z-20 h-full w-full ${Continue ? "invisible opacity-0" : "visible opacity-100"}`}
            style={{
              background: `${textHeight > 80 ? "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.90) 100%)" : ""}`,
            }}
          ></div>
          {comment.body}
        </p>
      </div>
      <div
        className={`w-full justify-center ${textHeight > 80 ? "flex" : "hidden"}`}
      >
        <button
          onClick={showTextHandler}
          className={`flex items-center gap-1 rounded-xl bg-white p-1 text-[var(--color-blue1)] shadow ${textHeight > 80 ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <span className={`text-[12px]`}>{Continue ? "کمتر" : "ادامه"}</span>
          {Continue ? (
            <FleshTop width={10} height={10} />
          ) : (
            <FleshBottom width={10} height={10} />
          )}
        </button>
      </div>
      <div className="flex justify-end cursor-pointer">
        <div className="flex gap-3">
          <div className="flex gap-1">
            <Like />
            <span>{toPersianNumber(comment.reactions.likes)}</span>
          </div>
          <div className="flex gap-1">
            <DisLike />
            <span>{toPersianNumber(comment.reactions.dislikes)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductComment;
