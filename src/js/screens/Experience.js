import { experience } from './../data.js';
import styles from './../../css/screen.module.css';
import experienceImage from './../../images/experience.jpg';
import useScreen from './useScreen.js';

function Experience() {
    return useScreen(experience, styles, experienceImage);
}

export default Experience;