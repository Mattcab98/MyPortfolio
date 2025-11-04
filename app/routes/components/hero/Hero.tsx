import styles from './hero.module.css';
import Button from '../utils/button/Button';
import ChangeWords from '../utils/changeWords/ChangeWords';

export default function Hero() {

    const words = ['Diseño.', 'Código.', 'Frontend.', 'Backend.', 'Optimización.', 'Innovación.'];

  return (
    <div className={styles.container__hero}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Desarrollo web pensado para crecer junto a tu proyecto.
        </h1>

        <div className={styles.container__subtitle}>
          <ChangeWords
            words={words}
            className={styles.subtitle}
            interval={3000}
          />
        </div>

        <Button txtButton="Contáctanos" />
      </div>
    </div>
  );
}
