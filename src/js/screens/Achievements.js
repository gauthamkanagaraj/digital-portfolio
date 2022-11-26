import { achievements } from './../data.js';
import styles from './../../css/screen.module.css';
import achievementsImage from './../../images/achievements.jpg';
import useScreen from './useScreen.js';

function Achievements() {
    return useScreen(achievements, styles, achievementsImage);
}

export default Achievements;