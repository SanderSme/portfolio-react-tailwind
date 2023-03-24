import React, {useState, useEffect} from 'react';

function HeroBannerHeadingCarousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const stringArray = props.strings;
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        setOpacity(0);
    }, [currentIndex]);

    useEffect(() => {
        setOpacity(1);
    }, [currentIndex, stringArray]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(currentIndex => (currentIndex + 1) % stringArray.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [stringArray.length]);

    return (
        <div className="string-display">
            <div className="string-display-content" style={{opacity}}>
                {stringArray[currentIndex]}
            </div>
        </div>
    );
}

export default HeroBannerHeadingCarousel;
