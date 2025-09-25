import styles from './hero.module.css';

import Button from '../utils/button/Button';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <h1 className={styles.title}>
                DESARROLLO <br/> WEB
            </h1>
            <span className={styles.subtitle}></span>
            <h2>
                Servicios de desarrollo web enfocados en la creación de sitios modernos, funcionales y adaptados a las
                necesidades de cada proyecto. Se prioriza el diseño atractivo, la optimización del rendimiento y la
                implementación de buenas prácticas de programación, con el objetivo de impulsar la presencia digital
                de negocios y emprendimientos, fortaleciendo su identidad en línea y generando resultados sostenibles
                en el tiempo.
            </h2>

            <Button txtButton='Contáctame' />
        </div>
    );
};