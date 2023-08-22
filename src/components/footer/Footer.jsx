import './footer.css';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Logo from '../../images/oftac.png';

const Footer = () => {
    return (
        <div>
            <div class="container">
                <div className='footer-grid'>
                    <div className='content py-3'>
                        <h3 className='my-title pb-2'>About Us<span className='title-line'></span></h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, 
                            eveniet! Quaerat perferendis perspiciatis, at error debitis fugit eligendi 
                            adipisci est.
                        </p>
                    </div>
                    <div className='content py-3'>
                        <h3 className='my-title pb-2'>Latest News<span className='title-line'></span></h3>
                        <h5>Lorem Ipsum <ArrowRightAltIcon /> </h5>
                        <h5>Lorem Ipsum <ArrowRightAltIcon /> </h5>
                        <h5>Lorem Ipsum <ArrowRightAltIcon /> </h5>
                        {/* <h5>Lorem Ipsum <ArrowRightAltIcon /> </h5> */}
                    </div>
                    <div className='content py-3'>
                        <h3 className='my-title pb-2'>Quick Links<span className='title-line'></span></h3>
                        <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <ul>
                                    <li>
                                        <ChevronRightIcon />
                                        <a href='/'>Home</a>
                                    </li>
                                    <li>
                                        <ChevronRightIcon />
                                        <a href='/about'>About Us</a>
                                    </li>
                                    <li>
                                        <ChevronRightIcon />
                                        <a href='/projects'>Our Projects</a>
                                    </li>
                                    <li>
                                        <ChevronRightIcon />
                                        <a href='/blog'>News</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <ul>
                                    <li>
                                        <ChevronRightIcon />
                                        <a href='/contact'>Contact Us</a>
                                    </li>
                                    <li>
                                        <ChevronRightIcon />
                                        <a href='/#'>Privacy Policy</a>
                                    </li>
                                    <li>
                                        <ChevronRightIcon />
                                        <a href='/#'>Terms & Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <h2 class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <img 
                                src={Logo}
                                alt='logo'
                                width='70'
                                height='70'
                                className='logo'
                            />
                        </h2>
                        <span class="mb-3 mb-md-0 text-muted">&copy; 2023 OFTAC, Org</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3">
                            <FacebookIcon />
                        </li>
                        <li class="ms-3">
                            <LinkedInIcon />
                        </li>
                        <li class="ms-3">
                            <TwitterIcon />
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer;
