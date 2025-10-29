import styles from './hero.module.css';
import Button from '../utils/button/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';


export default function Hero() {
const words = ['Diseño.', 'Código.', 'Frontend.', 'Backend.', 'Optimización.', 'Innovación.'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (

        <>
            <div className={styles.container__hero}>
                <div className={styles.hero}>

                    <h1 className={styles.title}>Desarrollo web pensado para crecer junto a tu proyecto.</h1>

                    <div className={styles.container__subtitle}>
                        <AnimatePresence mode='wait'>
                            <motion.h2
                                key={index}
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -100, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className={styles.subtitle}
                            >
                                {words[index]}
                            </motion.h2>
                        </AnimatePresence>
                    </div>

                    <Button txtButton="Contáctanos" />
                </div>
            </div>
        </>
    );
}
