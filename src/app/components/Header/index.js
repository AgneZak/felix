import "./index.scss";
import logo from '../../../assets/img/F.svg';

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img className="nav__img" src={logo} alt="logo-felix"/>
                <button className="nav__btn">Sign In</button>
            </nav>
        </header>
    );
}

export default Header;