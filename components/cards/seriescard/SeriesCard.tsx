import Image from "next/image";
import React from "react";
import styles from "./SeriesCard.module.css";

type seriesProps = {
  series: rowData;
  baseImageURI: string;
  index: number;
  isMobile: boolean;
  showRank: boolean;
};

export default function SeriesCard({
  series,
  baseImageURI,
  index,
  isMobile,
  showRank,
}: seriesProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImage}>
        <Image
          src={
            baseImageURI +
            "/" +
            (isMobile ? series.vertical : series.horizontal)
          }
          width={300}
          height={200}
          alt="text"
        />
      </div>
      {showRank && <span className={styles.cardNumber}>{index + 1}</span>}
    </div>
  );
}
