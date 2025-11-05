import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./footer.module.css";
import { Link } from "react-router";

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.footer__container}>

        <Link to="/">
          <img src="/logoMat.png" alt="Logo Matias" className={styles.logo} />
        </Link>

        <div className={styles.nav}>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        {/* Columna 3: Redes */}
        <div className={styles.social}>
          <a
            href="https://github.com/matiasalvarez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/matiasalvarez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:contacto@matias.dev"
            aria-label="Correo electrónico"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className={styles.copy}>
        <p>© {new Date().getFullYear()} Matias Alvarez. Todos los derechos reservados.</p>
      </div>
    </motion.footer>
  );
}
