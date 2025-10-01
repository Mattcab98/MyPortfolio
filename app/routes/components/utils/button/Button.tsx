import styles from './button.module.css';

type buttonProps = {
    txtButton: string;
    onclick?: () => void;   
};

export default function Button({txtButton, onclick}: buttonProps) {
    return (

        <button onClick={onclick} className={styles.buttonPrimary}> { txtButton }</button>
        
    );
}