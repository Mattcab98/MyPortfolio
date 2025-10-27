import styles from './button.module.css';

type buttonProps = {
    txtButton: string;
    onclick?: () => void;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
};

export default function Button({txtButton, onclick, children, style}: buttonProps) {
    return (

        <button 
            onClick={onclick}
            className={styles.buttonPrimary}
            style={style}> { txtButton }</button>
    );
}