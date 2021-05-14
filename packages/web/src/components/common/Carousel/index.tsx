/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import { ClassNameMap } from "@material-ui/styles";
import { useKeenSlider } from "keen-slider/react";
import { useCarouselStyles } from "./style";
import "keen-slider/keen-slider.min.css";

type CarouselProps = {
  items: React.ReactNode[];
  primaryColor?: string;
};

export const Carousel = ({ items, primaryColor }: CarouselProps) => {
  const classes = useCarouselStyles({ primaryColor });

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    mode: "free-snap",
    spacing: 15,
    centered: true,
    loop: true,
    duration: 3000,
  });

  return (
    <>
      <div className={classes.root}>
        <div
          ref={sliderRef}
          className="keen-slider"
          style={{ direction: "ltr" }}
        >
          {items.map((item, i) => (
            <div key={i} className="keen-slider__slide">
              {item}
            </div>
          ))}
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e: any) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === 0}
              classes={classes}
            />
            <ArrowRight
              onClick={(e: any) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === slider.details().size - 1}
              classes={classes}
            />
          </>
        )}
      </div>
      {slider && (
        <div className={classes.dots}>
          {[...Array(slider.details().size).keys()].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                slider.moveToSlideRelative(idx);
              }}
              className={`${classes.dot}${
                currentSlide === idx ? " active" : ""
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
};

type ArrowProps = {
  onClick: (e: any) => void;
  disabled: boolean;
  classes: ClassNameMap<string>;
};

function ArrowLeft({ disabled, onClick, classes }: ArrowProps) {
  const disabledClass = disabled ? ` ${classes.arrowDisabled}` : "";
  return (
    <svg
      onClick={onClick}
      className={`${classes.arrow} ${classes.arrowLeft}${disabledClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight({ disabled, onClick, classes }: ArrowProps) {
  const disabledClass = disabled ? ` ${classes.arrowDisabled}` : "";
  return (
    <svg
      onClick={onClick}
      className={`${classes.arrow} ${classes.arrowRight}${disabledClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}
