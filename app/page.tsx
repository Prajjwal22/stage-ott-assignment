import Image from "next/image";
import Card from "@/components/card/Card";
import TopSeries from "@/components/sections/topseries/TopSeries";
import { getRowData } from "@/lib/api";

export default async function Home() {
  let topSeries = await getRowData();
  return (
    <>
      <TopSeries title="Top 20 in Haryana" data={topSeries.data} />
    </>
  );
}
