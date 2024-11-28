import NewsletterBox from "../../comps/newsletterBox/newsletterBox.jsx";
import Header from "./../../comps/header/header.jsx";
import HeadImg from "../../assets/groceries-family-month.webp";
import Container from "../../comps/container/container.jsx";
import GeneralFav from "../../comps/generalFavs/generalFavs.jsx";
import YourFavs from "../../comps/yourfavs/yourfavs.jsx";

const frontpage = () => {
  return (
    <>
      <Header img={HeadImg} />
      <NewsletterBox />
      <Container>
        <YourFavs />
        <GeneralFav />
      </Container>
    </>
  );
};

export default frontpage;
