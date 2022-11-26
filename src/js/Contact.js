import { personalDetails } from "./data.js";
import styles from './../css/contact.module.css';
import useMobile from "./useMobile.js";

function Contact() {

    const mobile = useMobile();

    return (
        <div className={styles.contact}>
            <div className={styles.verticalDottedLine}></div>
            <h2 className={styles.contactTitle}>CONTACT</h2>
            
            <h3 className={mobile ? styles.contactLabelsMobile : styles.contactLabels}>Mail ID</h3>
            <a className={mobile ? styles.contactLinkMobile : styles.contactLink} target="_blank" href={"mailto:"+personalDetails.mail}><p className={styles.contactValues}>{personalDetails.mail}</p></a>
            
            <h3 className={mobile ? styles.contactLabelsMobile : styles.contactLabels}>LinkedIn</h3>
            <a className={mobile ? styles.contactLinkMobile : styles.contactLink} target="_blank" href={personalDetails.linkedin}><p className={styles.contactValues}>{personalDetails.linkedin}</p></a>
            
            <h3 className={mobile ? styles.contactLabelsMobile : styles.contactLabels}>GitHub</h3>
            <a className={mobile ? styles.contactLinkMobile : styles.contactLink} target="_blank" href={personalDetails.github}><p className={styles.contactValues}>{personalDetails.github}</p></a>
        </div>
    );
}

export default Contact;