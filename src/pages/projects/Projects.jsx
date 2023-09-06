import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './projects.css';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import ProjectCard from '../../components/projectCard/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://oftac-backend.onrender.com/api/project');
                setProjects(response.data.projects);
            } catch (error) {
                console.error('Error fetching projects:', error);
                console.log(error.response);
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
                        // Use the ProjectCard component to display project details
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
