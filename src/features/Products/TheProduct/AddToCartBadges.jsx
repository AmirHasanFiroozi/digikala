import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function AddToCartBadges() {
  const [product_badgesTop, setProduct_badgesTop] = useState(0);
  const { data } = useSelector((store) => store.theProductReducer);

  useEffect(
    function () {
      const timer = setTimeout(() => {
        if (product_badgesTop - 28 <= -28 * data.product_badges.length) {
          setProduct_badgesTop(0);
        } else {
          setProduct_badgesTop((product_badgesTop) => product_badgesTop - 28);
        }
      }, 2000);

      () => clearTimeout(timer);
    },
    [product_badgesTop, data.product_badges.length],
  );

  return (
    <div className="mt-5 h-7 overflow-hidden max-md:hidden">
      <div
        className="flex flex-col"
        style={{
          transform: `translate3d(0,${product_badgesTop}px,0)`,
          transitionDuration: `0.5s`,
        }}
      >
        {data.product_badges.map((product_badge) => (
          <div className="flex h-7 items-center gap-2" key={product_badge.id}>
            <img
              className="w-4"
              src={product_badge.payload.svg_icon}
              alt={product_badge.payload.text}
            />
            <span style={{ color: `${product_badge.payload.text_color}` }}>
              {product_badge.payload.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddToCartBadges;
