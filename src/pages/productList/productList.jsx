import Pageheader from "../../comps/header/header.jsx";
import Headerimg from "../../assets/groceries-family-month.webp";
import Section from "../../comps/section/section.jsx";
import { useGetData } from "../../hooks/useGetData.jsx";
import CardOutput from "../../comps/cardOutput/cardOutput.jsx";
import Container from "../../comps/container/container.jsx";
import { useEffect, useRef, useState } from "react";
import styles from "./productList.module.css";

export default function productList() {
  const data = useGetData();
  let [productsToShow, setProductsToShow] = useState([]);

  useEffect(() => {
    setProductsToShow([...data]);
  }, [data]); //Opdatere arrayen der skal vises, og som bliver filtreret ud fra, til at være alle som umidenbart.

  const searchField = useRef(); //Søgefeltet.
  const minRef = useRef(); //Til range.
  const maxRef = useRef(); //Til range.

  const handleChange = () => {
    //Når søgekritierene bliver opdateret.
    const array = data.filter((element) => {
      if (
        element.title
          .toLowerCase()
          .includes(searchField.current.value.toLowerCase()) &&
        element.price > minRef.current.value &&
        element.price < maxRef.current.value
      ) {
        return true;
      }

      return false;
    });

    setProductsToShow(array); //Sætter den nye filtreret array baseret på kritierne, til at blive den der skal vises og bruges.
  };

  return (
    <>
      <Pageheader img={Headerimg} text={"Produkter"} />

      <Container>
        <Section title={"Produkter"}>
          <div className={styles.inputFields}>
            <input
              type="text"
              name="search"
              ref={searchField}
              id="search"
              placeholder="Navn..."
              onChange={handleChange}
            />
            <input
              type="range"
              id="lowest"
              max="20"
              ref={minRef}
              min="0"
              defaultValue={0}
              onChange={handleChange}
            />
            <label htmlFor="lowest">
              Minimum pris: <span>${minRef.current?.value}</span>
            </label>

            <input
              type="range"
              id="highest"
              ref={maxRef}
              max="20"
              min="0"
              defaultValue={25}
              onChange={handleChange}
            />
            <label htmlFor="highest">
              Maksimum pris: <span>${maxRef.current?.value}</span>
            </label>
          </div>
          <CardOutput objects={productsToShow} />
        </Section>
      </Container>
    </>
  );
}
