"use client";
import React, { useEffect, useState } from "react";
import styles from "./TopSeries.module.css";
import Card from "@/components/card/Card";
import useMediaQuery from "@/hooks/useMediaQuery";

type topSeriesProps = {
  data: seriesData;
  title: string;
};

export default function TopSeries({ data, title }: topSeriesProps) {
  const isMobile = useMediaQuery("(max-width: 620px)");
  let baseImageURI = isMobile ? data.rootUrlVertical : data.rootUrlHorizontal;

  return (
    <section className={styles.topList}>
      <span className={styles.headerTitle}>{title}</span>
      <div className={styles.seriesList}>
        {data.rowData.map((series, index) => (
          <Card
            key={series._id}
            index={index}
            series={series}
            baseImageURI={baseImageURI}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  );
}
