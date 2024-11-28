import CardOutput from "../cardOutput/cardOutput.jsx";
import { useGetData } from "../../hooks/useGetData.jsx";
import { useEffect } from "react";
import Section from "../section/section.jsx";

//Komponent til forsiden der bare viser hvem der har en høj rating.
export default function generalFav() {
  const array = useGetData();

  const filteredFavs = array.filter((obj) => {
    if (obj.rating > 4.5) {
      return true; //Bevar den hvis værdien er over denne.
    }

    return false; //Ellers fjern den.
  });

  return (
    <>
      <Section title={"Brugernes favoritter"}>
        <CardOutput objects={filteredFavs} />
      </Section>
    </>
  );
}
