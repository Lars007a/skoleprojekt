import styles from "./container.module.css";
import { Children } from "react";

//Komponent til at få tingene ind i min wrapper.

export default function container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
