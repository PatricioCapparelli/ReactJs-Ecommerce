import Footer from '../containers/Footer/Footer';
import Navbar from '../containers/Navbar/Navbar'

const BaseLayout = ({ children }) => {
    return (
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}

export default BaseLayout;