import './projects.css';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

import beeKeeping from '../../images/bee-keeping.jpg';
import Image1 from '../../images/class.jpg';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Projects = () => {
    return (
        <div>
            <Navbar />
            <div className='about'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='about-header'>Our Projects</h2>
                </div>
            </div>
            <div className='projects pb-5'>
                <div className='container'>
                    <div className='text-center p-5'>
                        <h2 >Our Projects</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Maxime mollitia, molestiae quas vel sint commodi repudiandae
                        </p>
                    </div>
                    <div className='project'>
                        <div className='card mx-5'>
                            <div className='row'>
                                <div className='col-lg-6 col-sm-12'>
                                    <img 
                                        src={beeKeeping}
                                        alt=''
                                        width='500'
                                        height='100%'
                                    />
                                </div>
                                <div className='col-lg-6 col-sm-12 p-2'>
                                    <h3>Bee Keeping</h3>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Aperiam adipisci animi quaerat in dicta unde earum labore 
                                        dignissimos ea ipsum facilis consequatur possimus, alias 
                                        debitis, magni ducimus nostrum saepe eos.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Aperiam adipisci animi quaerat in dicta unde earum labore 
                                        dignissimos ea ipsum facilis consequatur possimus, alias 
                                        debitis, magni ducimus nostrum saepe eos.
                                    </p>
                                    <span className='p-2'>
                                        Read More <ArrowRightAltIcon />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='card mx-5'>
                            <div className='row'>
                                <div className='col-lg-6 col-sm-12'>
                                    <img 
                                        src={Image1}
                                        alt=''
                                        width='500'
                                        height='100%'
                                    />
                                </div>
                                <div className='col-lg-6 col-sm-12 p-2'>
                                    <h3>Education</h3>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Aperiam adipisci animi quaerat in dicta unde earum labore 
                                        dignissimos ea ipsum facilis consequatur possimus, alias 
                                        debitis, magni ducimus nostrum saepe eos.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Aperiam adipisci animi quaerat in dicta unde earum labore 
                                        dignissimos ea ipsum facilis consequatur possimus, alias 
                                        debitis, magni ducimus nostrum saepe eos.
                                    </p>
                                    <span className='p-2'>
                                        Read More <ArrowRightAltIcon />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects;
