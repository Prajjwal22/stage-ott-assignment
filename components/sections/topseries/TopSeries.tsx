"use client";
import React, { useEffect, useState } from "react";
import styles from "./TopSeries.module.css";
import Card from "@/components/card/Card";

type topSeriesProps = {
  data: seriesData;
  title: string;
};

export default function TopSeries({ data, title }: topSeriesProps) {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      useEffect(() => {
        const handleResize = () => {
          setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
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
                screenSize.width > 620 ? data.rootUrlHorizontal : data.rootUrlVertical
            }
            isMobile={screenSize.width < 620 ? true : false}
          />
        ))}
      </div>
    </section>
  );
}
