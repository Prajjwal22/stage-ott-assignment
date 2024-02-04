import Image from "next/image";
import Card from "@/components/card/Card";
import TopSeries from "@/components/sections/topseries/TopSeries";
import { getCarouselData, getRowData } from "@/lib/api";
import EmblaCarousel from "@/components/carousel/Carousel";

export default async function Home() {
  let topSeries = await getRowData();
  let featuredSeries = await getCarouselData();

  console.log(featuredSeries);
  return (
    <>
      <EmblaCarousel slides={featuredSeries.data.carousel} />
      <TopSeries title="Top 20 in Haryana" data={topSeries.data} />
    </>
  );
}
