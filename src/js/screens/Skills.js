import { skills } from './../data.js';
import styles from './../../css/screen.module.css';
import skillsImage from './../../images/publications.jpg';
import useScreen from './useScreen';

function Skills() {
    return useScreen(skills, styles, skillsImage);
}

export default Skills;