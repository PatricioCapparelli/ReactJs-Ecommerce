import Slider from "../../components/Slider/Slider";
import Title from "../../components/Title/Title"
import sambaImage from '/assets/cono-sambayon.png';
import oreoImage from   '/assets/helado-oreo-home.png'
import IconPresent from "../../components/IconPresent/IconPresent";
import mentaImage from   '/assets/cono-menta.png'
import arandanoImage from   '/assets/cono-arandano.png'
import merengueImage from   '/assets/cono-limon-merengue-min.png'
import bombonImage from '/assets/bombon-escoces.png'
import paletaImage from '/assets/paleta-home.png'
import ArticleComponent from "../../components/ArticleComponent/ArticleComponent";



const HomeContainer = () => {

    const sucursales = [
    { title: 'Lanus', name: '9 de julio 1680', number: '1134523380', numbertwo: '1135233522' },
    { title: 'Banfield', name: 'Cabrera 1992', number: '1134523380', numbertwo: '1135233522' },
    { title: 'Lomas de Zamora', name: 'Alberastain 2220', number: '1134523380', numbertwo: '1135233522' },
    { title: 'Quilmes', name: 'Derqui 4680', number: '1134523380', numbertwo: '1135233522' },
    { title: 'CABA', name: 'Maipu 188', number: '1134523380', numbertwo: '1135233522' },
];

    return (
    <>
        <section className="section-container__home">
            <Slider/>
            <Title className='home' name='DEJATE' lastname='TENTAR'/>
            <img className="section-container__home-samba" src={sambaImage} alt="helado de sambayon" />
        </section>
        <main className="section-container__home-main">
            <div className="container-main__home">
                <article className="container-main__article">
                <IconPresent className='icon-present' title='¿QUIENES SOMOS?' />
                <Title className='main' name='creadores de verdadero' lastname='helado artesanal' />   
                <p className="container-main__parraf">Desde un comienzo, tuvimos como objetivo <strong>complacer a los paladares más exigentes</strong> . Seleccionando cuidadosamente nuestra materia prima, logramos obtener un producto de calidad premium, totalmente artesanal.
                Contamos con una fábrica equipada con <strong>la más alta tecnología</strong>, vehículos refrigerados para distribución y personal altamente capacitado para brindar un servicio de calidad. Continuamos creciendo a través de nuestra <strong>red de franquicias</strong>. Atendemos también requerimientos de gastronomía, heladerías y eventos.</p>
                </article>
                <img className="container-main__img" src={oreoImage} alt="helado de oreo" />
            </div>
            <section className="container-main__two">
                {/* CREAR COMPONENTE QUE AGRUPE (ICONPRESENT, TITLE, P) */}
                <IconPresent className='icon-present' title='SABORES' />
                <Title className='section' name='Hechos de manera' lastname='artesanal' />  
                <p className="container-main__parraf-two">
                Nos gusta experimentar cosas nuevas, para eso nos capacitamos y seguimos creciendo día a día.
                ¡Queremos que vivas una explosión de sabor!
                </p>
                <div className="container-main__two-images">
                    <img src={mentaImage} alt="cono de menta" />
                    <img src={arandanoImage} alt="cono de arandano" />
                    <img src={merengueImage} alt="cono de merengue" />
                </div>
            </section>
            <section className="container-main__tree">
                <img src={bombonImage} alt="bombon escoces" />
                <div>
                <IconPresent className='icon-present' title='LOS MAS RICOS' />
                <Title className='section' lastname='Postres' />
                <p className="container-main__parraf-two">Disfrutá de nuestros deliciosos postres helados.</p>
                </div>
            </section>
            <section className="container-main__four">
                <div>
                <IconPresent className='icon-present' title='VARIEDAD DE SABORES' />
                <Title className='section' lastname='Paletas' />
                <p className="container-main__parraf-two">Probá exquisitos sabores en formato paleta. Desde Barbie y Spiderman hasta las propuestas más gourmet.</p>
                </div>
                <img src={paletaImage} alt="paleta chocolate blanco" />
            </section>
            <section className="container-main__footer">
                <div>
                <Title className='section' name='Nuestras' lastname='sucursales' />
                <p className="container-main__parraf-two">Continuamos creciendo a través de nuestra red de franquicias. Atendemos también requerimientos de gastronomía, heladerías y eventos.</p>
                </div>
            </section>
            <div className="footer-sucursales">
            {sucursales.map((item) => {
                return <ArticleComponent  key={item.title} {...item} />
            })}
            </div>
        </main>
    </>
    )
}

export default HomeContainer;

