import { useState } from 'react';
import styles from './Contact-form.module.css';
import InputFields from '../../common-comps/Input-fields';
import Button from '../../common-comps/Button';

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        text: ''
    });

    const inputHandler = (event) => {
        const value = event.target.value;
        setFormState({
            ...formState,
            [event.target.name]: value
        });
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formState);
    };

    return(
        <div className={styles.formContainer}>
            <form className={styles.contactForm} onSubmit={formSubmitHandler}>
                <InputFields styledClasses='formInput' inputLabel="Name" commonClasses='form-control' inputType="text" inputValue={formState.name} inputOnchange={inputHandler} inputName="name" />
                <InputFields styledClasses='formInput' inputLabel="Email" commonClasses='form-control' inputType="email" inputValue={formState.email} inputOnchange={inputHandler} inputName="email"/>
                <div className={`${styles.inputTextArea}`}>
                    <textarea className='form-control' name="text" onChange={inputHandler} value={formState.text}/>
                    <label>Text</label>
                </div>
                <Button buttonClass="blackButton" buttonName="Submit"/>
            </form>
        </div>
    );
}

export default ContactForm;