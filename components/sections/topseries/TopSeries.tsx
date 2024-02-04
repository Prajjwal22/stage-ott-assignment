"use client";
import React, { useEffect, useState } from "react";
import styles from "./TopSeries.module.css";
import Card from "@/components/card/Card";

type topSeriesProps = {
  data: seriesData;
  title: string;
};

export default function TopSeries({ data, title }: topSeriesProps) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);

      // Cleanup function to remove event listener
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section className={styles.topList}>
      <span className={styles.headerTitle}>{title}</span>
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
