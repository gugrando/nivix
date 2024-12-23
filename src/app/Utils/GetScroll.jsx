import { useState, useEffect } from "react";
function GetScroll() {
    const [scrollPosition, setScrollPosition] = useState(0);
        useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return scrollPosition
}

export default GetScroll

