import useMobile from "../useMobile";

const useScreen = (screenData, styles, screenImage) => {

    const mobile = useMobile();
    
    return (
      screenData.map(element => (
          <div className={styles.screen} key={element.id}>
              <div className={styles.verticalDottedLine}></div>
              <h2 className={mobile ? styles.screenTitleMobile : styles.screenTitle}>{element.title}</h2>
              <p className={mobile ? styles.screenDescriptionMobile : styles.screenDescription}>{element.description}</p>
              <div className={mobile ? styles.screenImageContainerMobile : styles.screenImageContainer} style={{backgroundImage: `url(${screenImage})`}}></div>
          </div>
      ))
    );
  }
  
  export default useScreen;