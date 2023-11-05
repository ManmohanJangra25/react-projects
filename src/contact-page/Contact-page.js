import styles from './Contact-page.module.css';
import Header from './components/Header';
import ContactButtons from './components/Contact-buttons';
import ContactForm from './components/Contact-form';
import serviceImage from '../contact-page/serviceImage.png';

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <main className={styles.mainSec}>
                <div className={styles.leftSec}>
                    <ContactButtons />
                    <ContactForm />
                </div>
                <div className={styles.rightSec}>
                    <img src={serviceImage} alt="service 24/7"/>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;