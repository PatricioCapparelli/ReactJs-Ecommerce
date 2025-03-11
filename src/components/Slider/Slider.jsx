import useSlider from '../../hooks/UseSlider'
import FondoChoco from '/assets/Fondo-choco.jpg';
import FondoFrutilla from '/assets/fondo-frutilla.jpg';
import FondoLimon from '/assets/Fondo-limon.jpg';

const images = [FondoChoco, FondoFrutilla, FondoLimon];


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

