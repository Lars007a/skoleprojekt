import styles from "./card.module.css";
import { RxCross1, RxHeart } from "react-icons/rx";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Link } from "react-router";

export default function cards({ productObj }) {
  const [favs, setFavs] = useLocalStorage("favObjs", []); //For at se om det skal have en like knap eller en fjern like knap.

  const isInLocalStorage = favs.includes(productObj.id);

  //Håndtere likes og fjern likes.
  const handleBtnClick = () => {
    if (isInLocalStorage == true) {
      //Fjern fra favoritter, hvis den er i localstorage.
      setFavs(favs.filter((element) => element != productObj.id));
    } else if (!isInLocalStorage) {
      //Tilføj til favoritter, hvis den ikke er i localstorage.
      setFavs(favs.concat(productObj.id));
    }
  };

  return (
    <>
      <div className={styles.card}>
        <img src={productObj.thumbnail} alt="Produkt biled" />
        <div className={styles.cardContainer}>
          <h2>{productObj.title}</h2>
          <p>{productObj.description}</p>
          <div className={styles.bottom}>
            {isInLocalStorage ? (
              <RxCross1
                onClick={handleBtnClick}
                className={styles.removeIcon}
              />
            ) : (
              <RxHeart onClick={handleBtnClick} className={styles.addIcon} />
            )}

            <Link
              to={`/products/${productObj.id}`}
              className={styles.showMoreBtn}
            >
              Se mere
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
