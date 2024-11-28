import styles from "./navbar.module.css";
import Container from "./../container/container.jsx";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <Container>
          <div className={styles.content}>
            {/* Til at få en row i wrapperen */}
            <h2 className={styles.title}>Købmanden</h2>
            {isOpen ? (
              <IoClose
                onClick={toggle}
                size={30}
                className={styles.hamburger}
                color="#fff"
              />
            ) : (
              <RxHamburgerMenu
                size={30}
                onClick={toggle}
                className={styles.hamburger}
                color="#fff"
              />
            )}
            <ul className={isOpen ? `${styles.openmobile}` : ""}>
              <li>
                <NavLink to="/">Forside</NavLink>
              </li>
              <li>
                <NavLink to="/products">Produkter</NavLink>
              </li>
              <li>
                <NavLink to="/about">Om os</NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default navbar;
