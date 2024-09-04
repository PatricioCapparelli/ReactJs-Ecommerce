import Navbar from '../containers/Navbar/Navbar'

const BaseLayout = ({ children }) => {
    return (
        <>
        <Navbar/>
        {children}
        <footer/>
        </>
    )
}

export default BaseLayout;