import Container from "../container/container.jsx";
import Section from "../section/section.jsx";
import CardOutput from "../cardOutput/cardOutput.jsx";
import { useGetData } from "../../hooks/useGetData.jsx";
import { useLocalStorage } from "@uidotdev/usehooks";

//Brugerens egne favoritter.
export default function yourfavs() {
  let data = useGetData(); //Få alt dataen fra api'en.
  let [favIds, setFavs] = useLocalStorage("favObjs", []); //Få de id'er, der er gemt i localstorage.

  console.log(favIds);

  const favsObjs = data.filter((element) => favIds.includes(element.id));

  console.log(favsObjs);

  return (
    <>
      <Container>
        <Section title={"Dine favoritter"}>
          <CardOutput objects={favsObjs} />
        </Section>
      </Container>
    </>
  );
}
