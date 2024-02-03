import Image from "next/image";
import React from "react";
import styles from "./Card.module.css";

type seriesProps = {
  series: rowData;
  baseImageURI: string;
  index: number;
  isMobile: boolean;
};

export default function Card({
  series,
  baseImageURI,
  index,
  isMobile,
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
      <span className={styles.cardNumber}>{index + 1}</span>
    </div>
  );
}
