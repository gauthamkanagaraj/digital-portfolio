import { education } from './../data.js';
import styles from './../../css/screen.module.css';
import educationImage from './../../images/education.jpg';
import useScreen from './useScreen.js';

function Education() {
    return useScreen(education, styles, educationImage);
}

export default Education;