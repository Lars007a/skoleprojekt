import Pageheader from "../../comps/header/header.jsx";
import Headerimg from "../../assets/groceries-family-month.webp";
import Section from "../../comps/section/section.jsx";
import Container from "../../comps/container/container.jsx";
import styles from "./about.module.css";

export default function aboutPage() {
  return (
    <>
      <Pageheader img={Headerimg} text={"Om os"} />
      <Container>
        <Section title={"Om os"}>
          <p className={styles.abouttext}>
            Velkommen til hjemmesiden! Her på siden kan du like de produkter du
            synes om, og få dem gemt på din forside. Du kan også søge og se alle
            produkterne i sortimentet, og søge i det på navn og pris. Hvis du
            lige pludselig ikke kan lide en af dine likede produkter mere, kan
            du fjerne det igen fra dine likes. Om hvert produkt kan du se mere
            om det individuelle produkt, og se blandt andet ratings og reviews.
          </p>
        </Section>
      </Container>
    </>
  );
}
