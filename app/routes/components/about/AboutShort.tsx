import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./aboutShort.module.css";

export default function AboutShort() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrolled && window.scrollY > 10) {
        setScrolled(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <motion.div
      className={styles.container__aboutShort}
      initial={{ opacity: 0, y: 30 }}
      animate={scrolled ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div>
        <h2 className={styles.titleAbout}>Nuestra Misión</h2>

        <p className={styles.txtAbout}>
          <span>mat.</span> ofrece desarrollo web profesional a medida, creando sitios modernos,
          funcionales y escalables que fortalecen la presencia digital de los negocios y generan
          resultados sostenibles.
        </p>

        <ul className={styles.highlights}>
          <li>Desarrollo web moderno y escalable</li>
          <li>Optimización de UX/UI y rendimiento</li>
          <li>Integración con bases de datos y APIs</li>
        </ul>
      </div>
    </motion.div>
  );
}
