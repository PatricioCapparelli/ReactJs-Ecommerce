import Slider from "../../components/Slider/Slider";
import Title from "../../components/Title/Title"

const HomeContainer = () => {

    return (
    <>
        <section className="section-container__home">
            <Slider/>
            <Title className='home' name='DEJATE TENTAR'/>
                <div className="section-container__home-main">
                
                </div>
        </section>
    </>
    )
}

export default HomeContainer;

