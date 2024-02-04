"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { ChevronDown, SearchIcon, Settings } from "lucide-react";
import Modal from "../modal/Modal";
import Link from "next/link";

const defaultLangs: Language[] = [
  { language: "Haryanvi", image: "/haryana.webp" },
  { language: "Rajasthani", image: "/rajasthan.webp" },
];
export default function Header() {
  const [languages, setLanguages] = useState(defaultLangs);
  const [selectedLang, setSelectedLang] = useState(defaultLangs[0]);
  const [isShow, setIsShow] = useState(false);

  const handleChangeLang = () => {
    alert("orajwa");
  };
  return (
    <>
      {isShow && (
        <Modal
          data={languages}
          setIsShow={setIsShow}
          handleChangeLang={handleChangeLang}
        />
      )}
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
            <span onClick={() => setIsShow(true)} className={styles.navItem}>
              {selectedLang.language} <ChevronDown size={20} />
            </span>
            <Link href="/search">
              <SearchIcon />
            </Link>
            <Link href="/settings">
              <Settings />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
