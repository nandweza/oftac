import './navbar.css';
import Logo from '../../assets/oftac.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand px-5">
                <img 
                    src={Logo}
                    alt='oftac logo'
                    width='90'
                    height='90'
                    className='logo'
                />
            </Link>
            <button className="navbar-toggler mx-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto justify-content-end px-5">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/projects' className="nav-link">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/blog' className="nav-link">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-link">Contact</Link>
                    </li>
                    <li>
                        <Link to='#' className="nav-link">
                            <button className='donate-btn'>
                                Donate
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;