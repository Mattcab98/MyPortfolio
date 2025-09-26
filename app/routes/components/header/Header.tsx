import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import ButtonAvailable from "../utils/buttonAvaible/ButtonAvailable";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { gsap } from "gsap";
import styles from "./header.module.css";
import ParticlesBg from "../particlesBg/ParticlesBg";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const navRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<Array<HTMLAnchorElement | null>>([]);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Detectar tamaño de pantalla
    useEffect(() => {
        const handleResize = () => {
            const nowDesktop = window.innerWidth >= 900;
            setIsDesktop(nowDesktop);

            if (nowDesktop && isOpen) {
                setIsOpen(false);
                if (navRef.current) gsap.set(navRef.current, { clearProps: "all" });
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // al montar
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen]);

    // Animación GSAP solo en móvil
    useEffect(() => {
        if (!navRef.current) return;
        if (isDesktop) {
            gsap.set(navRef.current, { clearProps: "all" });
            return;
        }

        if (isOpen) {
            // Abrir menú
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
            // Cerrar menú
            gsap.to(navRef.current, {
                duration: 0.5,
                height: 0,
                opacity: 0,
                ease: "power2.in"
            });
        }
    }, [isOpen, isDesktop]);

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
                        {["Inicio", "Acerca de", "Habilidades", "Servicios", "Contáctame"].map((text, index) => (
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
