import styles from "./header.module.css";

//Header, så det er det samme på alle siderne.
function header({ img, text }) {
  return (
    <>
      <header
        style={{
          backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url("${img}")`,
        }}
      >
        <h1>{text}</h1>
      </header>
    </>
  );
}

export default header;
