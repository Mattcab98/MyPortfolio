import { motion } from "framer-motion"
import styles from './projectsShort.module.css'
import CardProjects from '../utils/cardProjects/CardProjects'

const dataCardProyect = [
    {
        title: 'Proyecto 1',
        description: 'Proyecto web desarrollado para destacar la fotografía profesional que captura emociones y convierte instantes en arte.',
        img: '/ej1.jpg'
    },
    {
        title: 'Proyecto 2',
        description: 'Proyecto web desarrollado para Vaina Café, donde cada grano cuenta una historia y cada taza despierta recuerdos.',
        img: '/ej2.jpg'
    },
    {
        title: 'Proyecto 3',
        description: 'Descripción del proyecto 3',
        img: '/ej1.jpg'
    },
    {
        title: 'Proyecto 4',
        description: 'Descripción del proyecto 4',
        img: '/ej2.jpg'
    },
]

export default function ProjectsShort() {

    return (
        <div className={styles.container}>
            <div className={styles.container__cards}>
                {dataCardProyect.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 60,
                            damping: 15,
                            duration: 0.6,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <CardProjects
                            title={project.title}
                            description={project.description}
                            img={project.img}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
