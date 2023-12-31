import './projectDetail.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import ReactHtmlParser from "react-html-parser";

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
            <div className='d-flex justify-content-center align-items-center projectDetail section-bg'>
                {project ? (
                    <div className='container'>
                        <h2 className='text-center'>{project.title}</h2>
                        <img
                            src={`https://oftac-backend.onrender.com/uploads/${project.img}`}
                            // src='data:image/png;base64,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'
                            alt=''
                            width='100%'
                            height='100%'
                        />
                        {/* <p className='pt-2'>{project.content}</p> */}
                        <p className='pt-2'>
                            {ReactHtmlParser(project.content)}
                        </p>
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
