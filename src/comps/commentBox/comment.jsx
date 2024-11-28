import styles from "./comment.module.css";
import Container from "../section/section.jsx";

//Boksen til anmeldelser/reviews på hvert produkts individuelle side.
export default function comment({ commentObj }) {
  return (
    <div className={styles.commentBox}>
      <h3>{commentObj?.reviewerName}</h3>
      <span>{commentObj?.rating}/5</span>
      <p>{commentObj?.comment}</p>
    </div>
  );
}
