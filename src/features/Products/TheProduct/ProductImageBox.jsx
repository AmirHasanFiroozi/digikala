import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { ArrowLeft, ArrowRight } from "../../../Ui/SVGs/Svg";
import useSize from "../../../Hooks/useSize";

function ProductImageBox() {
  const { data } = useSelector((store) => store.theProductReducer);
  const AllPictures = [data.images.main, ...data.images.list];
  const [imageBoxWidth, setImageBoxWidth] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [left, setLeft] = useState(0);
  const [buttonShows, setButtonShows] = useState(false);
  //   const [zoomBox, setZoomBox] = useState({ x: 0, y: 0 });
  //   const [showZoom , setShowZom] = useState(false);
  const imageBoxWidthRef = useRef(null);
  const [width] = useSize();
  const slideNumber = left / imageBoxWidth + 1;
  const NumberOfElementInImageBox = Math.floor(imageBoxWidth / 80);

  useEffect(
    function () {
      setImageBoxWidth(imageBoxWidthRef.current.offsetWidth);
      setLeft(0);
    },
    [width],
  );

  function prevPictureHandler() {
    if (left === 0) setLeft(imageBoxWidth * (AllPictures.length - 1));
    else setLeft((left) => left - imageBoxWidth);
  }

  function nextPictureHandler() {
    if (left === imageBoxWidth * (AllPictures.length - 1)) setLeft(0);
    else setLeft((left) => left + imageBoxWidth);
  }
  //   function MouseMoveHandler(ev) {
  //     setZoomBox({
  //       x: ev.clientX - imageBoxWidthRef.current.getBoundingClientRect().left,
  //       y: ev.clientY - imageBoxWidthRef.current.getBoundingClientRect().top,
  //     });
  //     console.log(zoomBox);
  //   }

  function goToSlideFunction(ev) {
    if (ev.target.nodeName === "IMG") {
      ev.target = ev.target.parentElement;
    }
    setLeft((+ev.target.getAttribute("data-slid") - 1) * imageBoxWidth);
  }

  function handleTouchStart(ev){
    setTouchStartX(ev.touches[0].clientX);
  }

  function handleTouchEnd(ev){
    const touchEndX = ev.changedTouches[0].clientX ;
    const different = touchEndX - touchStartX ;

    if(different > 50){
      nextPictureHandler();
    }

    if(different < 50){
      prevPictureHandler()
    }
  }

  return (
    <div
      ref={imageBoxWidthRef}
      tabIndex={0}
      onKeyDown={(ev) => {
        if (ev.key === "ArrowLeft") {
          nextPictureHandler();
        }
        if (ev.key === "ArrowRight") {
          prevPictureHandler();
        }
      }}
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onMouseEnter={() => setButtonShows(true)}
      onMouseLeave={() => setButtonShows(false)}
      //   onMouseDown={() => setShowZom(true)}
      //   onMouseUp={()=> setShowZom(false)}
      //   onMouseMove={MouseMoveHandler}
      className="relative flex h-[500px] w-[28%] flex-col gap-1 focus:outline-0 max-lg:w-[100%]"
    >
      <div className="flex h-[75%] w-full overflow-hidden">
        <div
          className="flex h-full w-full items-center justify-center"
          style={{
            width: `${AllPictures.length * imageBoxWidth}px`,
            transform: `translate3d(${left}px,0,0)`,
            transitionDuration: "0.3s",
          }}
        >
          {AllPictures.map((image, i) => (
            <div
              className="h-full"
              style={{ width: `${imageBoxWidth}px` }}
              key={i}
            >
              <img
                className="h-full w-full object-contain"
                src={image.webp_url}
                alt="product image"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="hideScrollbar h-[25%] overflow-y-auto">
        <div
          className="flex gap-1"
          style={{
            width: `${AllPictures.length * 80}px`,
            transform: `translate3d(${slideNumber >= NumberOfElementInImageBox ? (slideNumber - NumberOfElementInImageBox) * 80 : "0"}px,0,0)`,
          }}
        >
          {AllPictures.map((image, i) => (
            <div
              onClick={goToSlideFunction}
              key={i}
              data-slid={i + 1}
              className={`customTransition mt-4 h-20 w-20 cursor-pointer rounded-2xl border-[1px] p-3 ${i + 1 === slideNumber ? "border-{var(--color-red1)}" : "border-[var(--color-gray2)]"}`}
            >
              <img src={image.webp_url} alt="product image" />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`absolute right-0 left-0 flex h-[75%] items-center justify-between ${buttonShows ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <button
          onClick={prevPictureHandler}
          className={`customTransition top-0 bottom-0 flex h-full w-10 cursor-pointer items-center justify-center rounded-tl-lg rounded-bl-lg text-[var(--text-color)] shadow`}
        >
          <ArrowRight />
        </button>
        <button
          onClick={nextPictureHandler}
          className={`customTransition top-0 bottom-0 flex h-full w-10 cursor-pointer items-center justify-center rounded-tr-lg rounded-br-lg text-[var(--text-color)] shadow`}
        >
          <ArrowLeft />
        </button>
      </div>
      {/* <div
        className={`absolute ${showZoom ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <img
          className="origin-top-left hover:scale-200"
          style={{ transform: `translate3d(${-zoomBox.x}px,${-zoomBox.y+20}px,0)` }}
          src={AllPictures[slideNumber - 1]?.webp_url}
          alt="product picture"
        />
      </div> */}
    </div>
  );
}

export default ProductImageBox;
