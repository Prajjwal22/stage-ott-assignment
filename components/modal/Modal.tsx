"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Modal.module.css";
import Image from "next/image";
import LanguageCard from "../cards/languagecard/LanguageCard";
import Button from "../button/Button";

type modalProp = {
  data: Language[];
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleChangeLang: () => void;
};

export default function Modal({
  data,
  setIsShow,
  handleChangeLang,
}: modalProp) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsShow]);

  return (
    <div className={styles.modalContainer}>
      <div ref={modalRef}>
        <div className={styles.modalWrapper}>
          <Image
            className={styles.logo}
            src="/stage.webp"
            width={200}
            height={200}
            alt="StageOTT"
          />
          <span className={styles.langText}>Select Your Language</span>
          <div className={styles.langList}>
            {data.map((lang, index) => (
              <LanguageCard key={index} lang={lang} />
            ))}
          </div>
          <Button setIsShow={setIsShow} color="red" text="Continue" />
        </div>
      </div>
    </div>
  );
}
