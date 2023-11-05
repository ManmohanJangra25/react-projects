import styles from "./Input-fields.module.css";

const InputFields = (props) => {
    const styledClasses = props.styledClasses === undefined || '' ? '' : styles[props.styledClasses];
    const commonClasses = props.commonClasses === undefined || '' ? '' : props.commonClasses;

  return (
    <div className={styles.inputContainer}>
      <input
        value={props.inputValue}
        onChange={props.inputOnchange}
        type={props.inputType}
        placeholder={props.inputPlaceholder}
        name={props.inputName}
        className={`${styledClasses} ${commonClasses}`}
      />
      <label for={props.inputName}>{props.inputLabel}</label>
    </div>
  );
};

export default InputFields;
