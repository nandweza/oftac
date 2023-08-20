import './navbar.css';
import Logo from '../../images/oftac.png';

const Navbar = () => {
    return (
        <nav className="header navbar navbar-expand-lg navbar-light bg-light py-5">
            <a className="navbar-brand px-5" href="/">
                <img 
                    src={Logo}
                    alt='oftac logo'
                    width='90'
                    height='90'
                    className='logo'
                />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto justify-content-end px-5">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/blog">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;