import styles from './Button.module.css';

const Button = (props) => {
    console.log(props.buttonIcon)
    return (
        <button className={`${styles[props.buttonClass]}`} onClick={props.ButtonOnClick}>
            {props.buttonIcon === '' ? '' : props.buttonIcon}
            {props.buttonName}
        </button>
    );
};

export default Button;