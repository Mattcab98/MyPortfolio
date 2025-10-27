import Button from '../button/Button'
import styles from './cardProjects.module.css'


type CardProjectsProps = {
    title: string,
    description: string,
    img: string,
}


export default function CardProjects({ title, description, img }: CardProjectsProps) {
    return (
        <>
            <article className={styles.card__article}>
                <img src={img} alt="" className={styles.card__img} />

                <div className={styles.card__data}>
                    <h2 className={styles.card__title}>{title}</h2>
                    <h3 className={styles.card__description}>{description}</h3>
                    <Button
                        txtButton='ver proyecto'
                        style={{scale: '.9', width: '150px'}}
                    />
                </div>
            </article>
        </>
    )
}   