import './projectDetail.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const ProjectDetail = () => {
    const { projectId } = useParams(); // Access the project ID from the URL
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Fetch the project details by ID from backend API using projectId
        fetch(`https://oftac-backend.onrender.com/api/project/${projectId}`)
            .then((response) => response.json())
            .then((data) => {
                setProject(data.project);
            })
        .catch((error) => {
            console.error('Error fetching project:', error);
        });
    }, [projectId]);

    return (
        <div>
            <Navbar />
            <div className='d-flex justify-content-center align-items-center projectDetail'>
                {project ? (
                    <div>
                        <h2>{project.title}</h2>
                        <p>{project.content}</p>
                    </div>
                ) : (
                    <p>Loading project details...</p>
                )}
            </div>
        <Footer />
    </div>
  );
}

export default ProjectDetail;
