import { memo } from "react";
import useMobile from "./useMobile";

function Title(prop) {

    const mobile = useMobile();

    return (
        <div className={prop.styles.hometitleContainer}>
            <h1 className={prop.styles.firstName}>{prop.firstName}</h1>
            <h1 className={prop.styles.lastName}>{prop.lastName}</h1>
            <p className={mobile ? prop.styles.titleMobile : prop.styles.title}>{prop.role}</p>
        </div>
    );
}

export default memo(Title);