"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { ChevronDown, SearchIcon, Settings } from "lucide-react";

export default function Header() {
  const [language, setLanguage] = useState("Haryanvi");
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <Image
          className={styles.logo}
          src="/stage-ott.webp"
          width={150}
          height={150}
          alt="Stage OTT"
        />
        <nav className={styles.navContainer}>
          <span className={styles.navItem}>{language} <ChevronDown/></span>
          <SearchIcon />
          <Settings />
        </nav>
      </div>
    </header>
  );
}
