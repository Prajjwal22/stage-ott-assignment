"use client";
import React from "react";
import styles from "./SeriesList.module.css";
import useMediaQuery from "@/hooks/useMediaQuery";
import SeriesCard from "@/components/cards/seriescard/SeriesCard";

type topSeriesProps = {
  data: seriesData;
  title: string;
  showRank:boolean
};

export default function SeriesList({ data, title ,showRank}: topSeriesProps) {
  const isMobile = useMediaQuery("(max-width: 620px)");
  let baseImageURI = isMobile ? data.rootUrlVertical : data.rootUrlHorizontal;

  return (
    <section className={styles.topList}>
      <span className={styles.headerTitle}>{title}</span>
      <div className={styles.seriesList}>
        {data.rowData.map((series, index) => (
          <SeriesCard
            key={series._id}
            index={index}
            series={series}
            baseImageURI={baseImageURI}
            isMobile={isMobile}
            showRank={showRank}
          />
        ))}
      </div>
    </section>
  );
}
