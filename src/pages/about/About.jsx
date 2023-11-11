import './about.css';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import Onen from '../../assets/Onen.png';
import Samuel from '../../assets/Samuel.png';
import Partner from '../../assets/partner.png';
import Oftac2 from '../../assets/oftacAbt.jpeg';
import Melinda from '../../assets/Melinda.jpeg';
import Damour from '../../assets/Damour.jpeg';
import Sharon from '../../assets/Sharon.jpeg';
import Tirza from '../../assets/Tirza.jpeg';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className='about d-flex justify-content-center align-items-center'>
                <div className=''>
                    <h2 className='about-header'>About OFTAC</h2>
                </div>
            </div>
            <div className='section-bg'>
                <div className='container about-us'>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12'>
                            <h3 className='pt-5 pb-2'>Organisation for Transforming African Communities</h3>
                            <p>
                                In 2016, Uganda suffered from extreme poverty, diseases and the price of 
                                food on the national market increased which got refugees into tears of 
                                hunger, diseases hence having many dead and others left stranded, some 
                                parents committed suicide due to too much stress and failure to feed their 
                                children, many children dropped out of school due to hunger and poverty 
                                hence losing hope for future.
                            </p>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <img 
                                src={Oftac2}
                                alt='about-us pic'
                                width='90%'
                                height='500'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-bg'>
                <div className='container'>
                    <h3>What we do</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem.
                    </p>
                </div>
            </div>
            <div className='section-bg'>
            <div className='team container pb-5'>
                <h3 className='text-center p-5'>Our Team</h3>
                <div className='row'>
                    <div className='col-lg-8 col-md-6 col-sm-12'>
                        <h4>Management</h4>
                        <p>
                            The Management Team of the Organization for Transforming African Communities 
                            (OFTAC) is a cohesive group of seasoned professionals dedicated to catalyzing 
                            positive change and sustainable development throughout Africa.
                        </p>
                        <div className='team-grid'>
                            <div className='card'>
                                <img 
                                    src={Onen}
                                    alt=''
                                    width='100%'
                                    height='200'
                                />
                                <div className='text-center'>
                                    <h6>Onen Matthew</h6>
                                    <p>Finance Director</p>
                                </div>
                            </div>
                            <div className='card'>
                                <img 
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTWtZjV_YXCgbJr1SNLAA_Px-nz8eacMrlw&usqp=CAU'
                                    alt=''
                                    width='100%'
                                    height='200'
                                />
                                <div className='text-center'>
                                    <h6>Lorem Ipsum</h6>
                                    <p>Lorem Ipsum</p>
                                </div>
                            </div>
                            <div className='card'>
                                <img 
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTWtZjV_YXCgbJr1SNLAA_Px-nz8eacMrlw&usqp=CAU'
                                    alt=''
                                    width='100%'
                                    height='200'
                                />
                                <div className='text-center'>
                                    <h6>Lorem Ipsum</h6>
                                    <p>Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 pb-2'>
                        <div className='card sm-screen-card'>
                            <img 
                                src={Samuel} 
                                alt=''
                                width='100%'
                                height='350'
                                className='ed-img'
                            />
                            <div className='p-2 text-center'>
                                <h6>Samuel</h6>
                                <p>Executive Director</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md-team'>
                    <div className='card sm-screen-card'>
                        <img 
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTWtZjV_YXCgbJr1SNLAA_Px-nz8eacMrlw&usqp=CAU'
                            alt=''
                            width='100%'
                            height='200'
                        />
                        <div className='text-center'>
                            <h6>Lorem Ipsum</h6>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='card sm-screen-card'>
                        <img 
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTWtZjV_YXCgbJr1SNLAA_Px-nz8eacMrlw&usqp=CAU'
                            alt=''
                            width='100%'
                            height='200'
                        />
                        <div className='text-center'>
                            <h6>Lorem Ipsum</h6>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='card sm-screen-card'>
                        <img 
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTWtZjV_YXCgbJr1SNLAA_Px-nz8eacMrlw&usqp=CAU'
                            alt=''
                            width='100%'
                            height='200'
                        />
                        <div className='text-center'>
                            <h6>Lorem Ipsum</h6>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='section-bg'>
                <div className='container'>
                    <h3 className='text-center pb-2'>Board of Directors</h3>
                    <div className='board-grid'>
                        <div className='card'>
                            <img 
                                src={Melinda}
                                alt=''
                                width='100%'
                                height='200'
                            />
                            <div className='text-center'>
                                <h6>Melinda Hennagir</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img 
                                src={Damour}
                                alt=''
                                width='100%'
                                height='200'
                            />
                            <div className='text-center'>
                                <h6>Tusingwire Damour Enriques</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img 
                                src={Sharon}
                                alt=''
                                width='100%'
                                height='200'
                            />
                            <div className='text-center'>
                                <h6>Sharon Small</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img 
                                src={Tirza}
                                alt=''
                                width='100%'
                                height='200'
                            />
                            <div className='text-center'>
                                <h6>Tirza Small</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img 
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTWtZjV_YXCgbJr1SNLAA_Px-nz8eacMrlw&usqp=CAU'
                                alt=''
                                width='100%'
                                height='200'
                            />
                            <div className='text-center'>
                                <h6>Lorem Ipsum</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-bg'>
                <div className='container partners'>
                    <h3 className='p-2 text-center'>Our Partners</h3>
                    <div className='partner-grid'>
                        <div className='card'>
                            <img 
                                src='data:image/jpeg;base64,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'
                                alt=''
                                width='200'
                                height='200'
                                className='mx-auto'
                            />
                        </div>
                        <div className='card'>
                            <img 
                                src={Partner}
                                alt=''
                                width='200'
                                height='200'
                                className='mx-auto'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;
