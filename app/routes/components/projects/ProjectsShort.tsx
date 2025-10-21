import styles from './projectsShort.module.css'
import CardProjects from '../utils/cardProjects/CardProjects'

const dataCardProyect = [
    {
        title: 'Proyecto 1',
        description: 'Descripción del proyecto 1',
        img: '/ej1.jpg'
    },
    {
        title: 'Proyecto 2',
        description: 'Descripción del proyecto 2',
        img: '/ej1.jpg'
    },
]

export default function ProjectsShort() {

    return (
        <>
            <div className={styles.container}>
                
                <div className={styles.container__cards}>
                    {dataCardProyect.map((project, index) => (
                        <CardProjects
                            key={index}
                            title={project.title}
                            description={project.description}
                            img={project.img}
                        />
                    ))}
                </div>

            </div>
        </>
    )

}