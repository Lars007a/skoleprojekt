import { useEffect, useState } from "react";

//Custom hook til for ikke at skulle skrive det her igen og igen.
export const useGetData = () => {
  const [data, setData] = useState([]);

  const get = async () => {
    try {
      const resp = await fetch(
        "https://dummyjson.com/products/category/groceries?limit=0"
      );

      if (!resp.ok) {
        throw new Error("Kunne ikke fetche fra api'en.");
      }

      const json = await resp.json(); //Konverter til json.

      setData(json.products); //Set state variablen.
    } catch (error) {
      console.log(error.msg);
    }
  };

  useEffect(() => {
    get();
  }, []); //Kør funktionen, eftersom kan ikke anvende hooks udenfor direkte i funktionskomponenter.

  return data;
};
