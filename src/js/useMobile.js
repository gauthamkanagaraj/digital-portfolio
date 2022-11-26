const useMobile = () => {
    if(window.outerHeight > window.outerWidth) {
        return true;
    }
    return false;
}

export default useMobile;