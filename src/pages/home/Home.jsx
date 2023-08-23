import './home.css';
import Navbar from '../../components/navbar/Navbar';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import KeyIcon from '@mui/icons-material/Key';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Footer from '../../components/footer/Footer';
import Tree from '../../assets/person-planting-tree.jpg';
import Pupils from '../../assets/class.jpg';

const Home = () => (
    <div>
        <Navbar />
        <div className="d-flex justify-content-center align-items-center vh-100 home">
            <div className='container text-center'>
                <h1>Organisation For Transforming<br /> African Communities</h1>
                <p>
                    To mitigate challenges affecting children, women and men in order to create
                    sustainable<br /> communities that are self-reliant” by equipping youth with
                    transformative knowledge and skills<br /> that would help them address the challenges
                    they are facing and the community at large.
                </p>
                <div className=''>
                    <a href='/about'>
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
                            src={Pupils}
                            alt=''
                            width='400'
                            height='400'
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
                        <a href='/about'>
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
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                    </h6>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <KeyIcon sx={{ fontSize: 70, color: 'rgb(226, 66, 66)' }} />
                    <h5>Our Values</h5>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                    </h6>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 md-screen'>
                    <RemoveRedEyeIcon sx={{ fontSize: 70, color: 'rgb(226, 66, 66)' }} />
                    <h5>Our Vision</h5>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                    </h6>
                </div>
            </div>
        </div>
        <div className='section-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-sm-12'>
                        <h3>
                            Support our Future plans
                        </h3>
                        <h6>
                            We plan to plant eucalyptus trees (forest) in Kyangwali refugee and
                            host community in order to improve and freshen the air in the area and
                            also improve on the climate
                        </h6>
                        <p>
                            We hope in three years time after planting the trees, they can be used
                            in construction as poles which can also be used to construct classrooms.
                            We have secured the land but need seedlings to start the planting. Two
                            seedlings cost USD 1, DONATE A SEEDLING.
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
                            height='400' />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)

export default Home;
