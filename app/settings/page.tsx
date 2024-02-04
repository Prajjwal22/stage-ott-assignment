import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import { ChevronRight } from "lucide-react";

export default function SettingsPage() {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Subscription</h2>
        <span className={styles.desc}>Upgrade to premium membership</span>
        <Button text="Recharge Now!" color="red" />
        <div className={styles.settingsList}>
          <span className={styles.settingItem}>
            Options <ChevronRight />
          </span>
          <span className={styles.settingItem}>
            Profile <ChevronRight />
          </span>
          <span className={styles.settingItem}>
            Plan <ChevronRight />
          </span>
          {/* rest things goes here... */}
        </div>
      </div>
    </main>
  );
}
