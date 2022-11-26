import Home from './Home.js';
import About from './screens/About.js';
import styles from './../css/wrapper.module.css';
import Experience from './screens/Experience.js';
import Achievements from './screens/Achievements.js';
import Education from './screens/Education.js';
import Publications from './screens/Publications.js';
import Skills from './screens/Skills.js';
import Contact from './Contact.js';
import Tracker from './Tracker.js';

function Wrapper() {


    return ( 
    <div className={styles.wrapper}>
        <Home />
        <Tracker />
        <About />
        <Experience />
        <Achievements />
        <Education />
        <Publications />
        <Skills />
        <Contact />
    </div>  
    );
}
export default Wrapper;