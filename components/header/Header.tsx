"use client";

import React, { useState } from "react";
import style from "./Header.module.css";
import Image from "next/image";
import { ChevronDown, SearchIcon, Settings } from "lucide-react";

export default function Header() {
  const [language, setLanguage] = useState("Haryanvi");
  return (
    <header className={style.headerWrapper}>
      <div className={style.headerContainer}>
        <Image
          className={style.logo}
          src="/stage-ott.webp"
          width={150}
          height={150}
          alt="Stage OTT"
        />
        <nav className={style.navContainer}>
          <span className={style.navItem}>{language} <ChevronDown/></span>
          <SearchIcon />
          <Settings />
        </nav>
      </div>
    </header>
  );
}
