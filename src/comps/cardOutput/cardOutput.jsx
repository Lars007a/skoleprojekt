import styles from "./cardOutput.module.css";
import Card from "../card/card.jsx";

//Standard component til ordentligt output af produkt cardsne, så det sker på samme måde over alt.
export default function cardOutput({ objects }) {
  if (objects.length <= 0) {
    return <p className={styles.noFoundText}>Ingen produkter fundet...</p>;
  }

  return (
    <>
      <div className={styles.grid}>
        {objects.map((obj) => {
          return <Card productObj={obj} key={obj.id} />;
        })}
      </div>
    </>
  );
}
