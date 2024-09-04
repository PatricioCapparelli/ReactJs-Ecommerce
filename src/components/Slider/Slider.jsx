import useSlider from '../UseSlider'

const images = [
    '../../src/assets/Fondo-choco.jpg',
    '../../src/assets/fondo-frutilla.jpg',
    '../../src/assets/fondo-limon.jpg'
];

const Slider = () => {
    const currentIndex = useSlider(images.length);

    return (
        <div className="slider">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Slide ${index}`}
                    className={`slide ${index === currentIndex ? 'active' : ''}`}
                />
            ))}
        </div>
    );
};



export default Slider;

