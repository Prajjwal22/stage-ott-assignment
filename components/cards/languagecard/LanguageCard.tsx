import React from "react";
import styles from "./LanguageCard.module.css";
import Image from "next/image";

type lanuageCardProps = {
  lang:Language
};

export default function LanguageCard({ lang }: lanuageCardProps) {
  console.log(lang);
  return (
    <div className={styles.langCard}>
      <div className={styles.overlay}></div>
      <span className={styles.language}>{lang.language}</span>
      <Image src={lang.image} width={100} height={100} alt={lang.language} />
    </div>
  );
}
