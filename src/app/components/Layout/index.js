import Header from "../Header";
import Footer from "../Footer";
import Hero from "../Hero";


function Layout({children}) {
    return (
        <>
        <Header/>
        <Hero/>
        <main className="main">{children}</main>
        <Footer/>
        </>
    );
}

export default Layout;