import styles from './hero.module.css';
import Button from '../utils/button/Button';

export default function Hero() {
    return (

        <>
            <div className={styles.container__hero}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>Desarrollo Web Profesional</h1>
                    <h2 className={styles.subtitle}>
                        Servicios a medida, para potenciar tu presencia digital
                    </h2>
                    <p className={styles.heroTxt}>
                        MAT ofrece desarrollo de sitios web modernos, funcionales y adaptados a cada proyecto.
                        Se prioriza un diseño atractivo, rendimiento optimizado y buenas prácticas de programación,
                        con el objetivo de generar resultados sostenibles para tu negocio.
                    </p>

                    <Button txtButton="Contáctame" />
                </div>
            </div>
        </>
    );
}
