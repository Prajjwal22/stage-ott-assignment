"use client";

import Carousel from "@/components/carousel/Carousel";
import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";

type featuredSeriesProps = {
  slides: featuredData;
};
export default function FeaturedSeries({ slides }: featuredSeriesProps) {
  const isDesktop = useMediaQuery("(min-width:768px)");
  return <Carousel isDesktop={isDesktop} slides={slides} />;
}
