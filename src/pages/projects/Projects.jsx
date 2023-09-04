import './projects.css';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

import beeKeeping from '../../assets/bee-keeping.jpg';
import Image1 from '../../assets/class.jpg';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Projects = () => {
    return (
        <div>
            <Navbar />
            <div className='about d-flex justify-content-center align-items-center'>
                <div className=''>
                    <h2 className='about-header'>Our Projects</h2>
                </div>
            </div>
            <div className='section-bg projects pb-5'>
                <div className=''>
                    <div className='text-center p-5'>
                        <h3 >Our Projects</h3>
                        <p>
                            <strong>Our Thematic areas:</strong><br />
                            Livelihood, Technology, Health, Food security and nutrition, Environment
                        </p>
                    </div>
                    <div className='project'>
                        <div className='card mx-5'>
                            <div className='row'>
                                <div className='col-lg-6 col-sm-12'>
                                    <img 
                                        src={beeKeeping}
                                        alt=''
                                        width='100%'
                                        height='100%'
                                    />
                                </div>
                                <div className='col-lg-6 col-sm-12 p-2'>
                                    <h4 className='px-2'>Bee Keeping</h4>
                                    <p className='p-2'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Aperiam adipisci animi quaerat in dicta unde earum labore 
                                        dignissimos ea ipsum facilis consequatur possimus, alias 
                                        debitis, magni ducimus nostrum saepe eos.
                                    </p>
                                    <p className='p-2'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Aperiam adipisci animi quaerat in dicta unde earum labore.
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
                                        width='100%'
                                        height='100%'
                                    />
                                </div>
                                <div className='col-lg-6 col-sm-12 p-2'>
                                    <h4 className='px-2'>Education</h4>
                                    <p className='p-2'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Aperiam adipisci animi quaerat in dicta unde earum labore 
                                        dignissimos ea ipsum facilis consequatur possimus, alias 
                                        debitis, magni ducimus nostrum saepe eos.
                                    </p>
                                    <p className='p-2'>
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
