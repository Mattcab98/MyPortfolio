import styles from "./buttonAvailable.module.css"

import { useState } from "react"

export default function ButtonAvailable({ status }: { status?: string }) {

    const [isAvailable, setIsAvailable] = useState(status ? status === "available" : false );

    const handleClick = () => {
        setIsAvailable(!isAvailable);
    };

    return (
        <div className={styles.container__button}>
            <button onClick={handleClick} className={`${styles.btn} ${isAvailable ? styles.success : styles.danger}`}>

                {isAvailable ? "DISPONIBLE" : "NO DISPONIBLE"}
            
            </button>
        </div>
    )
};