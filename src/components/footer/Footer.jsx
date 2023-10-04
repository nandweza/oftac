import './footer.css';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Logo from '../../assets/oftac.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Footer = () => {
    const [latestBlogPosts, setLatestBlogPosts] = useState([]);

    useEffect(() => {
        // Fetch the three latest blog post titles from your backend
        const fetchLatestBlogPosts = async () => {
            try {
                const response = await axios.get('https://oftac-backend.onrender.com/api/post');
                const latestTitles = response.data.slice(0, 3).map((post) => post.title);
                setLatestBlogPosts(latestTitles);
            } catch (error) {
                console.error('Error fetching latest blog posts:', error);
            }
        };

        fetchLatestBlogPosts();
    }, []);
    return (
        <div>
            <div class="container">
                <div className='footer-grid'>
                    <div className='content py-3'>
                        <h5 className='my-title pb-2'>About Us<span className='title-line'></span></h5>
                        <p>
                            In 2016, Uganda suffered from extreme poverty, diseases and the price of 
                            food on the national market increased which got refugees ...
                        </p>
                    </div>
                    <div className='content py-3 smx-screen-mt'>
                        <h5 className='my-title pb-2'>Latest News<span className='title-line'></span></h5>
                        {/* <a href='/#'>
                            <h6>Lorem Ipsum <ArrowRightAltIcon sx={{ fontSize: 30, color: 'rgb(226, 66, 66)' }}/> </h6>
                        </a>
                        <a href='/#'>
                            <h6>Lorem Ipsum <ArrowRightAltIcon sx={{ fontSize: 30, color: 'rgb(226, 66, 66)' }}/> </h6>
                        </a>
                        <a href='/#'>
                            <h6>Lorem Ipsum <ArrowRightAltIcon sx={{ fontSize: 30, color: 'rgb(226, 66, 66)' }}/> </h6>
                        </a> */}
                        {latestBlogPosts.map((title, index) => (
                            <a key={index} href='/#'>
                                <h6>{title} <ArrowRightAltIcon sx={{ fontSize: 30, color: 'rgb(226, 66, 66)' }}/></h6>
                            </a>
                        ))}
                    </div>
                    <div className='content py-3 sm-screen-mt'>
                        <h5 className='my-title pb-2'>Quick Links<span className='title-line'></span></h5>
                        <div className='grid-row'>
                            <div className='grid-col'>
                                <ul>
                                    <li>
                                        <ChevronRightIcon sx={{ fontSize: 20, color: 'rgb(226, 66, 66)' }} />
                                        <a href='/'>Home</a>
                                    </li>
                                    <li>
                                        <ChevronRightIcon sx={{ fontSize: 20, color: 'rgb(226, 66, 66)' }} />
                                        <a href='/#/about'>About Us</a>
                                    </li>
                                    <li>
                                        <ChevronRightIcon sx={{ fontSize: 20, color: 'rgb(226, 66, 66)' }} />
                                        <a href='/#/projects'>Our Projects</a>
                                    </li>
                                    <li>
                                        <ChevronRightIcon sx={{ fontSize: 20, color: 'rgb(226, 66, 66)' }} />
                                        <a href='/#/news'>News</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='grid-col sm-screen-mt2'>
                                <ul>
                                    <li>
                                        <ChevronRightIcon sx={{ fontSize: 20, color: 'rgb(226, 66, 66)' }} />
                                        <a href='/#/contact'>Contact Us</a>
                                    </li>
                                    <li>
                                        <ChevronRightIcon sx={{ fontSize: 20, color: 'rgb(226, 66, 66)' }} />
                                        <a href='/#'>Privacy Policy</a>
                                    </li>
                                    <li>
                                        <ChevronRightIcon sx={{ fontSize: 20, color: 'rgb(226, 66, 66)' }} />
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
                            <a 
                                href='https://www.facebook.com/profile.php?id=100095506303376' 
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FacebookIcon />
                            </a>
                        </li>
                        <li class="ms-3">
                            <a href='/#'>
                                <InstagramIcon />
                            </a>
                        </li>
                        <li class="ms-3">
                            <a href='/#'>
                                <LinkedInIcon />
                            </a>
                        </li>
                        <li class="ms-3">
                            <a href='/#'>
                                <TwitterIcon />
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer;
