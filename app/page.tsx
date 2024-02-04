import { getCarouselData, getRowData } from "@/lib/api";
import SeriesList from "@/components/sections/serieslist/SeriesList";
import FeaturedSeries from "@/components/sections/featuredseries/FeaturedSeries";

export default async function Home() {
  let topSeries = await getRowData();
  let featuredSeries = await getCarouselData();

  return (
    <main>
      <FeaturedSeries slides={featuredSeries.data} />
      <SeriesList
        showRank={true}
        title="Top 20 in Haryana"
        data={topSeries.data}
      />
      <SeriesList showRank={false} title="VIP Shows" data={topSeries.data} />
      <SeriesList
        showRank={false}
        title="Exclusive Web Series"
        data={topSeries.data}
      />
    </main>
  );
}
