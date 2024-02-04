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
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useMediaQuery from "@/hooks/useMediaQuery";

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

type slidesProps = {
  slides: featuredData;
};
const EmblaCarousel = ({ slides }: slidesProps) => {
  const isDesktop = useMediaQuery("(min-width:768px)");

  const { rootUrl, carousel } = slides;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    WheelGesturesPlugin(),
    Autoplay({ speed: 10 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
  }, [emblaApi]);
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
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    onScroll();

    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll, onSelect]);

  const DotButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props;

    return <span {...restProps}>{children}</span>;
  };

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {carousel.map((slide, index) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__slide__number}>
                  <span>{index + 1}</span>
                </div>
                <img
                  className={styles.embla__slide__img}
                  src={`${rootUrl}/${isDesktop ? slide.ratio2 : slide.ratio1}`}
                  alt={`Side: ${slide.ratio2}`}
                />
              </div>
            ))}
          </div>
          <div className={styles.embla__dots}>
            {carousel.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => scrollTo(index)}
                className={`${styles.embla__dot} ${
                  index === selectedIndex ? styles.selectedDot : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
