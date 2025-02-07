import { useCallback, useEffect, useRef, useState } from "react";
import ArrowRightButton from "../../Ui/Buttons/ArrowRightButton";
import ArrowLeftButton from "../../Ui/Buttons/ArrowLeftButton";
import useSize from "../../Hooks/useSize";
import { Image } from "../../Ui/SVGs/Svg";

function Slider({ slides }) {
  const [buttonShows, setButtonShows] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const [touchStartX , setTouchStartX] = useState(0);
  const [right, setRight] = useState(0);
  const [width] = useSize();
  const slide = useRef();
  const slidesLength = slides.length;
  const slideNumber = -right / slideWidth;

  useEffect(
    function () {
      setSlideWidth(slide.current.getBoundingClientRect().width);
      setRight(0);
    },
    [width],
  );

  const nextSlide = useCallback(
    function nextSlide() {
      if (right - slideWidth === -slideWidth * slidesLength) setRight(0);
      else setRight(right - slideWidth);
    },
    [right, slideWidth, slidesLength],
  );

  function prevSlide() {
    if (right === 0) setRight(-slideWidth * (slidesLength - 1));
    else setRight(right + slideWidth);
  }

  useEffect(
    function () {
      const timer = setTimeout(() => {
        nextSlide();
      }, 5000);
      return () => clearTimeout(timer);
    },
    [nextSlide],
  );

  function pointClickHandler(ev) {
    setRight(-(+ev.target.getAttribute("data-id") * slideWidth));
  }

  function handleTouchStart(ev){
    setTouchStartX(ev.touches[0].clientX);
  }

  function handleTouchEnd(ev){
    const touchEndX = ev.changedTouches[0].clientX ;
    const different = touchEndX - touchStartX ;

    if(different > 50){
      nextSlide();
    }

    if(different < 50){
      prevSlide()
    }
  }


  return (
    <div
      onKeyDown={(ev) => {
        if (ev.key === "ArrowLeft") {
          nextSlide();
        }
        if (ev.key === "ArrowRight") {
          prevSlide();
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setButtonShows(true)}
      onMouseLeave={() => setButtonShows(false)}
      className="wholePageItemsContainer relative flex h-[400px] items-center justify-center gap-1 overflow-hidden max-xl:h-[200px] max-sm:h-[150px]"
    >
      <div ref={slide} className="h-full w-full max-sm:w-[90%]">
        <div
          className="relative flex h-full transition-[0.5s] max-sm:gap-4"
          style={{
            width: `${slideWidth * slidesLength + 6}px`,
            right: `${right}px`,
          }}
        >
          {slides.map((slide) => (
            <a
              key={slide.id}
              target="_blank"
              className={`flex h-full items-center justify-center`}
              style={{ width: `${slideWidth}px` }}
              href={`https://www.digikala.com/${slide.url.uri}`}
            >
              {slide.image ? (
                <img
                  className="h-full w-full object-cover max-sm:rounded-2xl"
                  src={slide.image}
                  alt={slide.title}
                />
              ) : (
                <Image width={100} height={100} />
              )}
            </a>
          ))}
        </div>
        <div className="absolute right-0 bottom-2 left-0 flex items-center justify-center gap-0.5 text-center">
          {slides.map((slide, i) => (
            <span
              onClick={pointClickHandler}
              className={`block h-1.5 cursor-pointer rounded-full ${slideNumber === i ? "w-3 bg-gray-200" : "w-1.5 bg-gray-800"} transition-[0.2s]`}
              key={i}
              data-id={i}
            >
              {" "}
            </span>
          ))}
        </div>
        <div
          className={`absolute right-8 bottom-8 flex gap-1 max-sm:bottom-4 ${buttonShows ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <ArrowRightButton onClick={prevSlide} />
          <ArrowLeftButton onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
}

export default Slider;
