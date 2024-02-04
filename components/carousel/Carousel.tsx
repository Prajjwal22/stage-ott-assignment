"use client";

import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { flushSync } from "react-dom";
import styles from "./Carousel.module.css";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import { tree } from "next/dist/build/templates/app-page";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    WheelGesturesPlugin(),
    Autoplay({ speed: 10 }),
    // AutoScroll(),
  ]);
  const [tweenValues, setTweenValues] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    // const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
    //   let diffToTarget = scrollSnap - scrollProgress;

    //   if (engine.options.loop) {
    //     engine.slideLooper.loopPoints.forEach((loopItem) => {
    //       const target = loopItem.target();
    //       if (index === loopItem.index && target !== 0) {
    //         const sign = Math.sign(target);
    //         if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
    //         if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
    //       }
    //     });
    //   }
    //   const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
    //   return numberWithinRange(tweenValue, 0, 1);
    // });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    onInit(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    onScroll();

    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll, onInit, onSelect]);

  const DotButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props;

    return <span {...restProps}>{children}</span>;
  };

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {slides.map((img, index) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__slide__number}>
                  <span>{index + 1}</span>
                </div>
                <img
                  className={styles.embla__slide__img}
                  src={
                    "https://media.stage.in/show/horizontal/large/" + img.ratio1
                  }
                  alt="Your alt text"
                />
              </div>
            ))}
          </div>{" "}
          <div className={styles.embla__dots}>
            {slides.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => scrollTo(index)}
                className={`${styles.embla__dot} ${
                  index === selectedIndex ? styles.selectedDot : ""
                }`}
                // className={styles.embla__dot.concat(
                //   index === selectedIndex ? styles.embla__dot_selected : ""
                // )}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
