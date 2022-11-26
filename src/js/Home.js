import {personalDetails} from './data.js';
import styles from './../css/home.module.css';
import logo from './../images/logo.png';
import { useCallback, useState, useEffect } from 'react';
import Info from './Info.js';
import Title from './Title.js';

function Home() {

    const [wind, setWind] = useState({
        logoSize: "200px",
        logoSourceSize: 200,
        bannerSourceSize: 200,
        bannerHeight: '200px',
        bannerColor: 'transparent',
        windState: false,
        trackArea: window.outerHeight/4
    });

    const handleBannerWinding = useCallback(() => {
        if(window.scrollY < wind.trackArea) {
            setWind((preWind) => {return {
                ...preWind,
                windState: false,
                bannerHeight: '200px',
                bannerColor: 'transparent',
                logoSize: "200px"
            }});
        }
        else if(!wind.windState && window.scrollY > wind.trackArea) {
            const ratio = parseInt(((window.scrollY - parseInt(wind.trackArea)) / (parseInt(wind.trackArea)))*100);
            const shrinkSize = parseInt((ratio / (wind.logoSourceSize / 2)) * 100);
            setWind((preWind) => {return {
                ...preWind,
                logoSize: wind.logoSourceSize - shrinkSize + "px",
                bannerHeight: parseInt(wind.bannerSourceSize) - shrinkSize + "px"
            }});
            if(window.scrollY >= wind.trackArea * 2) {
                setWind((preWind) => {return {
                    ...preWind,
                    windState: true,
                    logoSize: (wind.logoSourceSize / 2) + "px",
                    bannerColor: '#181818',
                    bannerHeight: parseInt(wind.bannerSourceSize / 2) + "px"
                }});
            }
        } else if(wind.windState && window.scrollY <= (wind.trackArea*2)) {
            const ratio = parseInt((( parseInt(wind.trackArea * 2) - window.scrollY) / (parseInt(wind.trackArea * 2)))*100);
            const expSize = parseInt((ratio / (wind.logoSourceSize / 2)) * 100);
            let logoExpandSize = (parseInt(wind.logoSize) + parseInt(expSize));
            if(parseInt(logoExpandSize) > wind.logoSourceSize) {
                logoExpandSize = wind.logoSourceSize;
            }
            setWind((preWind) => {return {
                ...preWind,
                windState: true,
                logoSize: logoExpandSize + "px",
                bannerColor: 'transparent',
                bannerHeight: wind.bannerSourceSize + "px"
            }
        }); 
        }   
    }, [window.scrollY]);

    useEffect(() => {
        window.addEventListener("scroll", handleBannerWinding);
        return () => {
            window.removeEventListener("scroll", handleBannerWinding);
        };
    }, [handleBannerWinding]);

    return (
    <div className={styles.home}>
        <div style={{backgroundColor: wind.bannerColor, top: '0', width: '100%', left: '0', height: wind.bannerHeight, position: 'fixed', zIndex: '4'}}>
            <img className={styles.logo} height={wind.logoSize} width={wind.logoSize} src={logo} />
        </div>
        <Title styles={styles} firstName={personalDetails.firstName} lastName={personalDetails.lastName} role={personalDetails.role} />
        <Info style={styles} visibility={wind.windState} />
    </div>
    );
}

export default Home;