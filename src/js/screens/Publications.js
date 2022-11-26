import { publications } from "./../data.js";
import styles from './../../css/screen.module.css';
import publicationsImage from './../../images/publications.jpg';
import useScreen from './useScreen.js';

function Publications() {
    return useScreen(publications, styles, publicationsImage);
}

export default Publications;