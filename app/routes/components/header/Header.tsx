import { Link } from "react-router";
import { useState, useRef } from "react";
import ButtonAvailable from "../utils/buttonAvaible/ButtonAvailable";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import styles from "./header.module.css";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const navRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<Array<HTMLAnchorElement | null>>([]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={styles.container__header}>

            {(isDesktop || isOpen) && <ButtonAvailable status="available" />}

            <header className={styles.header}>

                <div className={styles.container__logo}>
                    <Link to="/">
                        <img src="/logoMat.png" alt="Logo Matias" className={styles.logo} />
                    </Link>
                </div>

                <nav
                    ref={navRef}
                    className={`${styles.nav} ${isOpen ? styles.navActive : ""}`}
                >
                    <div className={styles.container__a}>
                        {["Inicio", "About", "Servicios", "Contáctame"].map((text, index) => (
                            <Link
                                key={index}
                                to={text === "Inicio" ? "/" : `/${text.toLowerCase()}`}
                                ref={(el) => { linksRef.current[index] = el }}
                                className={styles.a}
                            >
                                {text}
                            </Link>
                        ))}
                    </div>
                </nav>

                {/* Icono de menú solo en móvil */}
                {!isDesktop && (
                    <div className={styles.iconNav} onClick={toggleMenu}>
                        {!isOpen ? (
                            <HiOutlineMenu className={styles.iconMenu} />
                        ) : (
                            <IoMdClose className={styles.iconMenu} />
                        )}
                    </div>
                )}

            </header>
        </div>
    );
}
