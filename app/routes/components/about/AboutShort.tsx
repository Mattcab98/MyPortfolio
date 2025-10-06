import styles from './aboutShort.module.css'

export default function AboutShort() {

    return (
        <>
            <div className={styles.container__aboutShort}>
                <div>
                    <h2 className={styles.titleAbout}>
                        Nuestra Misión
                    </h2>
                    <p className={styles.txtAbout}>
                        <span>mat.</span> ofrece desarrollo web profesional a medida, creando sitios modernos, funcionales y escalables que fortalecen la presencia digital de los negocios y generan resultados sostenibles.
                    </p>
                    <ul className={styles.highlights}>
                        <li>Desarrollo web moderno y escalable</li>
                        <li>Optimización de UX/UI y rendimiento</li>
                        <li>Integración con bases de datos y APIs</li>
                    </ul>
                </div>
            </div>
        </>
    )

}