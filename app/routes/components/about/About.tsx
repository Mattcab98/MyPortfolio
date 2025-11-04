import styles from './about.module.css';
import ChangeWords from '../utils/changeWords/ChangeWords';

export default function AboutShort() {

    return (
        <>
            <div className={styles.container__about}>
                <div>
                    <h2 className={styles.titleAbout}>
                        El desarrollo que impulsa tu identidad.
                    </h2>
                    <p className={styles.txtAbout}>
                        En <span>mat.</span> creemos que cada proyecto digital tiene el potencial de transformar un negocio. Nuestra misión es acompañar a emprendedores y pequeñas marcas en su crecimiento, desarrollando soluciones web personalizadas que combinan diseño moderno, rendimiento y tecnología de vanguardia. Como profesional independiente, me motiva ayudar a quienes buscan fortalecer su presencia online con herramientas eficientes, escalables y adaptadas a sus necesidades reales. Cada sitio que creamos está pensado para reflejar la identidad del proyecto, optimizar la experiencia del usuario y potenciar resultados sostenibles en el tiempo.
                    </p>

                    <ChangeWords
                        words={[
                            'Diseñamos experiencias digitales únicas.',
                            'Convertimos ideas en código funcional.',
                            'Impulsamos tu presencia online.',
                            'Creamos interfaces que inspiran confianza.',
                        ]}
                        className={styles.wordsChange}
                        interval={4000}
                    />
                </div>
            </div>
        </>
    )

}