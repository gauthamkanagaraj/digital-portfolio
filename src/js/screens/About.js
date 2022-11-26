import { about } from './../data.js';
import styles from './../../css/screen.module.css';
import aboutImage from './../../images/about.jpg';
import useScreen from './useScreen.js';

function About() {
    
    return useScreen(about, styles, aboutImage);
}

export default About;