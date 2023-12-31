import './home.css';
import Navbar from '../../components/navbar/Navbar';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import KeyIcon from '@mui/icons-material/Key';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Footer from '../../components/footer/Footer';
import beeKeeping from '../../assets/oftacBee.jpeg';
import Oftac2 from '../../assets/oftacAbt.jpeg';

const Home = () => (
    <div>
        <Navbar />
        <div className="d-flex justify-content-center align-items-center vh-100 home pt-5">
            <div className='container text-center'>
                <h1>Organisation For Transforming<br /> African Communities</h1>
                <p>
                    To mitigate challenges affecting children, women and men in order to create
                    sustainable<br /> communities that are self-reliant” by equipping youth with
                    transformative knowledge and skills<br /> that would help them address the challenges
                    they are facing and the community at large.
                </p>
                <div className=''>
                    <a href='/#/about'>
                        <button className='p-2 about-btn'>ABOUT US</button>
                    </a>
                    <a href='/#'>
                        <button className='p-2 mx-2'>SUPPORT OFTAC</button>
                    </a>
                </div>
            </div>
        </div>
        <div className='section-bg vh-auto'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6 text-center'>
                        <img
                            src={Oftac2}
                            alt=''
                            width='400'
                            height='350'
                            className='about-img'
                        />
                    </div>
                    <div className='col-sm-12 col-lg-6'>
                        <h3 className='text-left my-title pb-2'>About Us<span className='title-line'></span></h3>
                        <p>
                            In 2016, Uganda suffered from extreme poverty, diseases and the price of
                            food on the national market increased which got refugees into tears of
                            hunger, diseases hence having many dead and others left stranded, some
                            parents committed suicide due to too much stress and failure to feed their
                            children, many children dropped out of school due to hunger and poverty
                            hence losing hope for future.
                        </p>
                        <a href='/#/about'>
                            <button className='p-2 fw-bold'>Read More</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row text-center p-5'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <RadioButtonCheckedIcon sx={{ fontSize: 70, color: 'rgb(226, 66, 66)' }} />
                    <h5>Our Mission</h5>
                    <h6>
                        To mitigate challenges affecting people 
                        through practical knowledge and skills.
                    </h6>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <RemoveRedEyeIcon sx={{ fontSize: 70, color: 'rgb(226, 66, 66)' }} />
                    <h5>Our Vision</h5>
                    <h6>
                        United, peaceful and self-reliant Communities in Africa
                    </h6>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 md-screen'>
                    <KeyIcon sx={{ fontSize: 70, color: 'rgb(226, 66, 66)' }} />
                    <h5>Our Values</h5>
                    <h6>
                        Community responsibility, Boldness,Unity, 
                        Gender equality, Honesty and optimisity.
                    </h6>
                </div>
            </div>
        </div>
        <div className='section-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-sm-12'>
                        <h3>
                            Support our Project
                        </h3>
                        <h6>
                            <strong>Organization For Transforming African Communities</strong> seeks 
                            for grants for further development of the ongoing project.
                        </h6>
                        <div className='pt-2'>
                            <h5>Project Overview:</h5>
                            <p>
                                The project proposal focuses on bee keeping to increase honey production, 
                                pollination, reduce malnutrition in Kyangwali refugee camp and provide 
                                sustainable livelihoods for the local communities in rural areas. This 
                                project seeks to obtain funding for creating a bee keeping enterprise, 
                                purchasing bee keeping equipment, providing training, generating income, 
                                and ensuring the preservation and protection of bee populations. By 
                                creating a sustainable bee keeping enterprise, this project aims to 
                                address the challenges of poverty, food insecurity, and dwindling bee 
                                populations.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                        <img
                            src={beeKeeping}
                            alt=''
                            width='100%'
                            height='400' />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)

export default Home;
