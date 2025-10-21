import styles from './cardProjects.module.css'


type CardProjectsProps = {
    title: string,
    description:string,
    img: string,
}


export default function CardProjects({title, description, img}:CardProjectsProps) {
    return (
        <>
            <article className={styles.card__article}>
                <img src={img} alt="" className={styles.card__img} />

                <div className={styles.card__data}>
                    <h2 className={styles.card__title}>{title}</h2>
                    <span className={styles.card__description}>{description}</span>
                    <a href="" className={styles.card__button}>Ver Proyecto</a>
                </div>
            </article>
        </>
    )
}   