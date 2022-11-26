import { memo } from "react";
import useMobile from "./useMobile";


function Info(prop) {

    const mobile = useMobile();
    if(mobile) {
        return <p className={prop.style.infoMobile} style={{display: prop.visibility ? 'none' : 'block'}}>Scroll <i className="material-icons">keyboard_double_arrow_down</i> to Navigate</p>
    } else {
        return <p className={prop.style.info} style={{display: prop.visibility ? 'none' : 'block'}}>Use <i className="material-icons">mouse</i> or <i className="material-icons">keyboard_double_arrow_down</i> Key to Navigate</p>
    }
}

export default memo(Info);