import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './projects.css';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://oftac-backend.onrender.com/api/project');
                setProjects(response.data.projects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

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
                        <h3>Our Projects</h3>
                        <p>
                            <strong>Our Thematic areas:</strong>
                            <br />
                            Livelihood, Technology, Health, Food security and nutrition, Environment
                        </p>
                    </div>

                    {projects.map((project) => (
                        <div className='project' key={project._id}>
                            <div className='card mx-5'>
                                <div className='row'>
                                    <div className='col-lg-6 col-sm-12'>
                                        <img src={`https://oftac-backend.onrender.com/uploads/${project.img}`} alt='' width='100%' height='100%' />
                                    </div>
                                    <div className='col-lg-6 col-sm-12 p-2'>
                                        <h4 className='px-2'>{project.title}</h4>
                                        <p className='p-2'>{project.content}</p>
                                        <a href={`/#/project/${project._id}`} className='p-2'>
                                            Read More <ArrowRightAltIcon />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
