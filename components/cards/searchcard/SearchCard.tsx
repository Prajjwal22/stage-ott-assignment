import React from "react";
import styles from "./SearchCard.module.css";

type searchCardProps = {
  title: string;
};
export default function SearchCard({ title }:searchCardProps) {
  return <div className={styles.searchCard}>{title}</div>;
}
