import { useParams } from "react-router";
import { useGetData } from "../../hooks/useGetData.jsx";
import { useState, useEffect } from "react";
import Section from "../../comps/section/section.jsx";
import Container from "../../comps/container/container.jsx";
import Pagehead from "../../comps/header/header.jsx";
import Pageimage from "../../assets/groceries-family-month.webp";
import styles from "./singleProduct.module.css";
import Comment from "../../comps/commentBox/comment.jsx";

export default function singleProduct() {
  const { id } = useParams();
  const data = useGetData();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const obj = data[data.findIndex((element) => element.id == id)];
    setProduct(obj);
  }, [data]);

  console.log(product);

  return (
    <>
      <Pagehead text={product?.title} img={Pageimage} />
      <Container>
        <Section>
          <div className={styles.info}>
            <img src={product?.thumbnail} alt="produktbiled" />
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <p>
              <strong>Kategori: </strong>
              {product?.category}
            </p>
            <p>
              <strong>Pris: </strong>${product?.price}
            </p>
            <p>
              <strong>Rating: </strong>
              {product?.rating}
            </p>
            {product?.reviews?.map((obj) => {
              return <Comment commentObj={obj} />;
            })}
          </div>
        </Section>
      </Container>
    </>
  );
}
