"use client";

import React from "react";
import styles from "./Button.module.css";

type buttonProps = {
  text: string;
  color: string;
  setIsShow?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Button({ text, color, setIsShow }: buttonProps) {
  return (
    <button
      onClick={() => setIsShow?.(false)}
      style={{ background: color }}
      className={styles.btn}
    >
      {text}
    </button>
  );
}
