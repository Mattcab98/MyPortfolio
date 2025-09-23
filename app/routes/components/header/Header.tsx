import { Link } from "react-router";

// COMPONENTES

import ButtonAvailable from "../utils/buttonAvaible/ButtonAvailable";

import { HiOutlineMenu } from "react-icons/hi"; // hamburguesa
import { IoMdClose } from "react-icons/io";     // cerrar

import styles from "./header.module.css";
import { useState, useRef, useEffect } from "react";

import { gsap } from "gsap";
// import 'bootstrap/dist/css/bootstrap.min.css'; // solo CSS


export default function Header() {

    // Estado para el menú hamburguesa / navegación

    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<Array<HTMLAnchorElement | null>>([]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if (!navRef.current) return

        const isMobile = window.innerWidth < 900;

        if (isMobile) {
            if (isOpen) {
                gsap.to(navRef.current, {
                    duration: 0.5,
                    height: window.innerHeight + "px",
                    opacity: 1,
                    ease: "power2.out"
                });
                gsap.fromTo(
                    linksRef.current,
                    { y: -20, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.1, duration: 0.3, ease: "power2.out" }
                );
            } else {
                gsap.to(navRef.current, {
                    duration: 0.5,
                    height: 0,
                    opacity: 0,
                    ease: "power2.in"
                });
            }
        } else {
            gsap.set(navRef.current, { clearProps: "all" });
        }
    }, [isOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 900 && navRef.current) {
                // Desktop: remover estilos inline de GSAP
                gsap.set(navRef.current, { clearProps: "all" });
            }
        };

        window.addEventListener("resize", handleResize);

        // Ejecutar al montar para cubrir el tamaño inicial
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Detectar si es escritorio para mostrar button disponibilidad

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 900);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={`${styles.container__header}`}>

            <header className={`${styles.header}`}>

                <div className={styles.container__logo}>
                    <Link to="/">
                        <img src="/logoMat.png" alt="Logo Matias" className={styles.logo} />
                    </Link>
                    {(isDesktop || isOpen) && <ButtonAvailable status="available" />}

                </div>

                <nav
                    ref={navRef}
                    className={`${styles.nav} ${isOpen ? styles.navActive : ""}`}
                    style={{ overflow: "hidden", height: "800px", opacity: 0 }}
                >

                    <div className={styles.container__a}>
                        {
                            ["Inicio", "Acerca de", "Habilidades", "Servicios", "Contáctame"].map((text, index) => (

                                <Link
                                    key={index}
                                    to={text === "Inicio" ? "/" : `/${text.toLowerCase()}`}
                                    ref={(el) => {
                                        (linksRef.current[index] = el)
                                    }}
                                    className={styles.a}
                                > {text}
                                </Link>
                            )

                            )
                        }
                    </div>

                </nav>


                <div className={styles.iconNav} onClick={toggleMenu}>

                    {!isOpen ? (
                        <HiOutlineMenu className={`${styles.iconMenu} ${styles.iconMenuOpen}`} />
                    ) : (<IoMdClose className={`${styles.iconMenu} ${styles.iconMenuClose}`} />)
                    }

                </div>


            </header>

        </div>

    );
};