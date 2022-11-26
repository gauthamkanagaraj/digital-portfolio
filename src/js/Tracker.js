import { useEffect, useRef, useState, useCallback} from 'react';

function Tracker() {
    
    const trackerRef = useRef();

    const [padding, setPadding] = useState("40px");

    const handleTrackerPosition = useCallback(() => {
        const scrollPos = window.scrollY + (window.outerHeight / 2);
        const paddingTop = scrollPos - trackerRef.current.offsetTop;
        if(paddingTop > 0) {
            setPadding(paddingTop + "px");
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleTrackerPosition);
        return () => {
            window.removeEventListener("scroll", handleTrackerPosition);
        };
    }, [handleTrackerPosition]);
    

    return (
        <>
            <i ref={trackerRef} className="material-icons" style={{
                color: 'white',
                marginLeft: '0px',
                fontSize: '40px',
                paddingTop: padding,
                position: 'absolute',
                zIndex: '2'
            }}>hiking</i>
        </>
    );

}

export default Tracker;