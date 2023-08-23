import './navbar.css';
import Logo from '../../assets/oftac.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand px-5" href="/">
                <img 
                    src={Logo}
                    alt='oftac logo'
                    width='90'
                    height='90'
                    className='logo'
                />
            </a>
            <button className="navbar-toggler mx-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto justify-content-end px-5">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/blog">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/#">
                            <button className='donate-btn'>
                                Donate
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;