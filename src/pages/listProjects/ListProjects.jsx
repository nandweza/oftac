import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './listProjects.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

const ListProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch the list of projects from the backend when the component mounts
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

    const handleDelete = async (projectId) => {
        try {
            // Send a DELETE request to delete the project by ID
            await axios.delete(`https://oftac-backend.onrender.com/api/project/${projectId}`);
      
            // Remove the deleted project from the state
            setProjects((prevProjects) => prevProjects.filter((project) => project._id !== projectId));
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    return (
        <div className='admin'>
            <Topbar />
            <div className='adminContent'>
                <Sidebar />
                <div className='adminPanel'>
                    <h2>List of Projects</h2>
                    <ul>
                        {projects.map((project) => (
                            <li key={project._id} className=''>
                                <h3>{project.title}</h3>
                                <img src={`https://oftac-backend.onrender.com/uploads/${project.img}`} alt={project.title} />
                                <p>{project.content}</p>
                                <button 
                                    onClick={() => handleDelete(project._id)}
                                    className='btn btn-lg btn-danger fw-bold'
                                >
                                    Delete
                                </button>
                                {/* Add an update button that opens a popup form for updating the project */}
                                {/* <button onClick={() => handleUpdate(project)}>Update</button> */}
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ListProjects;
