"use client";

import React from "react";
import styles from "./page.module.css";
import { MoveLeft, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import SearchCard from "@/components/cards/searchcard/SearchCard";

const genre = ["Movies", "Web Series", "Shows", "Comedy", "Stories"];

export default function SearchPage() {
  const router = useRouter();
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.header}>
          <MoveLeft onClick={router.back} />
          Search
        </span>
        <div className={styles.searchBar}>
          <span className={styles.searchIcon}>
            <Search size={20} />
          </span>
          <input
            id="search"
            type="text"
            placeholder="shows, web series, movies..."
          />
        </div>
        <span>Select From Categories</span>
        <div className={styles.genreList}>
          {genre.map((item, index) => (
            <SearchCard key={index} title={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
