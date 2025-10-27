import styles from './skills.module.css';

import CardSkills from '../utils/cardSkills/CardSkills';

export default function Skills() {


    return (
        <section className={styles.section__skills}>

            <div className={styles.container__skills}>

                <div className={styles.tittle__skills}>
                    <h2 className={styles.h2}>
                        De la Idea al Código: <br />
                        {/* <span>Mis Habilidades</span> */}
                    </h2>
                </div>

                <div className={styles.skillsContainer}>
                    <CardSkills/>
                </div>

            </div>

        </section>
    );
}

