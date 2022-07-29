import React from "react";
import styles from "./Notification.module.css";
import NotificationIcon from "../../../public/assets/Notification.svg";

export default function Notification({ title }) {
  return (
    <div className={styles.wrapper}>
      <NotificationIcon className={styles.icon} />
      <span className={styles.text}>{title}</span>
    </div>
  );
}