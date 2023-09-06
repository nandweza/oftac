import './navbar.css';
import Logo from '../../assets/oftac.png';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to='/' className="navbar-brand px-5">
                <img 
                    src={Logo}
                    alt='oftac logo'
                    width='90'
                    height='90'
                    className='logo'
                />
            </NavLink>
            <button className="navbar-toggler mx-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto justify-content-end px-5">
                    <li className="nav-item">
                        <NavLink exact to='/' className="nav-link" activeClassName="active-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/about' className="nav-link" activeClassName="active-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/project' className="nav-link" activeClassName="active-link">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/news' className="nav-link" activeClassName="active-link">News</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/contact' className="nav-link" activeClassName="active-link">Contact</NavLink>
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
