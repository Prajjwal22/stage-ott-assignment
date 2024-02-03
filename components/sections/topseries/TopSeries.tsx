"use client";
import React, { useEffect, useState } from "react";
import styles from "./TopSeries.module.css";
import Card from "@/components/card/Card";

type topSeriesProps = {
  data: seriesData;
};

export default function TopSeries({ data }: topSeriesProps) {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.topList}>
      <span className={styles.headerTitle}>Top 20 in Haryana</span>
      <div className={styles.seriesList}>
        {data.rowData.map((series, index) => (
          <Card
            key={series._id}
            index={index}
            series={series}
            baseImageURI={
              screenWidth > 620 ? data.rootUrlHorizontal : data.rootUrlVertical
            }
            isMobile={screenWidth < 620 ? true : false}
          />
        ))}
      </div>
    </section>
  );
}
