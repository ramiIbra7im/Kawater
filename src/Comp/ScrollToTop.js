import { useState, useEffect } from "react";

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        let currentPosition = window.scrollY;
        const step = 50; // مقدار النزول في كل فريم (تقدر تزود أو تقلل حسب السرعة)
        
        const smoothScroll = () => {
            if (currentPosition > 0) {
                window.scrollTo(0, currentPosition);
                currentPosition -= step;
                requestAnimationFrame(smoothScroll);
            }
        };

        requestAnimationFrame(smoothScroll);
    };

    return (
        <button 
            className={`btn btn-primary rounded-circle shadow-lg scroll-to-top ${visible ? "fade-in" : "fade-out"}`} 
            onClick={scrollToTop}
        >
            <i class="bi bi-arrow-up-circle-fill fs-2"></i>
        </button>
    );
}

export default ScrollToTop;
