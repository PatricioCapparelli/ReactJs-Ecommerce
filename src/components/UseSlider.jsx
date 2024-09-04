import { useState, useEffect } from 'react';

const useSlider = (imageCount, interval = 6000) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const changeImage = () => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % imageCount);
        };

        const timer = setInterval(changeImage, interval);

        return () => clearInterval(timer);
    }, [imageCount, interval]);

    return currentIndex;
};

export default useSlider;
