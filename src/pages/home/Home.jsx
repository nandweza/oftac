import './home.css';
import Navbar from '../../components/navbar/Navbar';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import KeyIcon from '@mui/icons-material/Key';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Footer from '../../components/footer/Footer';
import Tree from '../../images/tree-planting.jpg';
import Pupils from '../../images/class.jpg';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center align-items-center vh-100 home">
                <div className='container text-center'>
                    <h1>Organisation For Transforming<br/> African Communities</h1>
                    <p>
                        To mitigate challenges affecting children, women and men in order to create 
                        sustainable<br /> communities that are self-reliant” by equipping youth with 
                        transformative knowledge and skills<br /> that would help them address the challenges 
                        they are facing and the community at large.
                    </p>
                    <div className=''>
                        <button className='p-2'>ABOUT US</button>
                        <button className='p-2 mx-2 contact-btn'>CONTACT US</button>
                    </div>
                </div>
            </div>
            <div className='section-bg vh-auto'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-lg-6 text-center'>
                            <img 
                                src={Pupils} 
                                alt='' 
                                width='400' 
                                height='400' 
                            />
                        </div>
                        <div className='col-sm-12 col-lg-6'>
                            <h2 className='text-left'>About Us</h2>
                            <p>
                                In 2016, Uganda suffered from extreme poverty, diseases and the price of 
                                food on the national market increased which got refugees into tears of 
                                hunger, diseases hence having many dead and others left stranded, some 
                                parents committed suicide due to too much stress and failure to feed their 
                                children, many children dropped out of school due to hunger and poverty 
                                hence losing hope for future.
                            </p>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row text-center p-5'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <RadioButtonCheckedIcon />
                        <h4>Our Mission</h4>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Maxime mollitia, molestiae quas vel sint
                        </h5>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <KeyIcon />
                        <h4>Our Values</h4>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Maxime mollitia, molestiae quas vel sint
                        </h5>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <RemoveRedEyeIcon />
                        <h4>Our Vision</h4>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Maxime mollitia, molestiae quas vel sint
                        </h5>
                    </div>
                </div>
            </div>
            <div className='section-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-sm-12'>
                            <h2>
                                Support our Future plans
                            </h2>
                            <h5>
                                We plan to plant eucalyptus trees (forest) in Kyangwali refugee and 
                                host community in order to improve and freshen the air in the area and 
                                also improve on the climate
                            </h5>
                            <p>
                                We hope in three years time after planting the trees, they can be used 
                                in construction as poles which can also be used to construct classrooms. 
                                We have secured the land but need seedlings to start the planting. Two 
                                seedlings cost USD1, DONATE A SEEDLING.
                            </p>
                            <p>
                                This project is a multi-purpose because it will help to conserve the 
                                environment as well as supporting in boosting the education for 
                                refugee children, that brings us to the next plan of starting a school 
                                There are only 6 schools in Kyangwali refugee camp which has millions 
                                of children who all need to acquire quality education.
                                You find more than 250 children in a class managed by only one teacher 
                                which is difficult and makes it a need for more schools in the camp. 
                                Planting trees is easiest and cheapest long time project that would 
                                help address the challenge of education in Kyangwali refugee and host 
                                community.
                            </p>
                        </div>
                        <div className='col-lg-4 col-sm-12'>
                            <img 
                                src={Tree}
                                alt=''
                                width='100%'
                                height='400'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
