import styles from "./section.module.css";

//Et komponent til at få sektionerne til at se så ens ud som muligt.
export default function section({ title, children }) {
  return (
    <div className={styles.sec}>
      <h2 className={styles.sectitle}>{title}</h2>
      {children}
    </div>
  );
}
