import styles from './hero.module.css';
import Button from '../utils/button/Button';

export default function Hero() {
    return (

        <>
            <div className={styles.container__hero}>

                <div className={styles.container__img}>
                    {/* <img src="/perfil1.png" alt="Perfil" /> */}
                </div>

                <div className={styles.hero}>
                    <h1 className={styles.title}>DESARROLLO WEB</h1>
                    <h2>
                        Servicios de desarrollo web enfocados en crear sitios modernos, funcionales y adaptados a las necesidades de cada proyecto. Priorizamos un diseño atractivo, rendimiento optimizado y buenas prácticas de programación, con el objetivo de fortalecer la presencia digital de negocios y generar resultados sostenibles en el tiempo.
                    </h2>
                    <Button txtButton="Contáctame" />
                </div>
            </div>
        </>
    );
}
