import { Link } from "react-router";

import { HiOutlineMenu } from "react-icons/hi"; // hamburguesa
import { IoMdClose } from "react-icons/io";     // cerrar

import styles from "./header.module.css";
import { useState, useRef, useEffect } from "react";

import { gsap } from "gsap";
import 'bootstrap/dist/css/bootstrap.min.css'; // solo CSS


export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<Array<HTMLAnchorElement | null>>([]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if (navRef.current) {
            if (isOpen) {
                gsap.to(
                    navRef.current, {
                    duration: 0.5, height: window.innerHeight + "px", opacity: 1, ease: "power2.out"
                }
                );
                gsap.fromTo(
                    linksRef.current,
                    { y: -20, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.1, duration: 0.3, ease: "power2.out" }
                );
            } else {
                gsap.to(navRef.current, { duration: 0.5, height: 0, opacity: 0, ease: "power2.in" });
            };
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


    return (
        <header className={`container-fluid p-0 ${styles.header}`}>

            <div className={styles.container__logo}>
                <Link to="/">
                    <img src="/logoMat.png" alt="Logo Matias" className={styles.logo} />
                </Link>
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

                {/* <div className={styles.container__a}>
                    <Link to="/" className={styles.a}>Inicio</Link>
                    <Link to="/about" className={styles.a}>Acerca de</Link>
                    <Link to="/skills" className={styles.a}>Habilidades</Link>
                    <Link to="/services" className={styles.a}>Servicios</Link>
                    <Link to="/contact" className={styles.a}>Contáctame</Link>
                </div> */}

            </nav>


            <div className={styles.iconNav} onClick={toggleMenu}>

                {!isOpen ? (
                    <HiOutlineMenu className={`${styles.iconMenu} ${styles.iconMenuOpen}`} />
                ) : (<IoMdClose className={`${styles.iconMenu} ${styles.iconMenuClose}`} />)
                }

            </div>

        </header>
    );
};