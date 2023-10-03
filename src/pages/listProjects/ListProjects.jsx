import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './listProjects.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import ReactHtmlParser from "react-html-parser";
import UpdateProject from '../../components/UpdateProject';

const ListProjects = () => {
    const [projects, setProjects] = useState([]);
    const [editProject, setEditProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const handleUpdate = (projectId) => {
        // Find the project to edit by its ID
        const projectToEdit = projects.find((project) => project._id === projectId);
        if (projectToEdit) {
            // Set the editingProject state to the project you want to edit
            setEditProject(projectToEdit);
            // Open the modal
            setIsModalOpen(true);
        }
    };


    const handleSaveProject = async () => {
        try {
            if (!editProject) {
                // If editingProject is not set, return early
                return;
            }

            // Send a PUT or PATCH request to update the project on the backend
            const response = await axios.put(
                `https://oftac-backend.onrender.com/api/project/${editProject._id}`,
                editProject
            );

            // Update the project in the state with the edited data
            setProjects((prevProjects) =>
                prevProjects.map((project) =>
                    project._id === editProject._id ? response.data.updatedProject : project
                )
            );

            // Clear the editing state and close the modal
            setEditProject(null);
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };


    const handleCancelProjectUpdate = () => {
        // Clear the editing state and close the modal
        setEditProject(null);
        setIsModalOpen(false);
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
                                <div>{ReactHtmlParser(project.content)}</div>
                                <button 
                                    onClick={() => handleDelete(project._id)}
                                    className='btn btn-lg btn-danger fw-bold'
                                >
                                    Delete
                                </button>
                                <button onClick={() => handleUpdate(project._id)}>Update</button>
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isModalOpen && (
                <UpdateProject
                    project={editProject}
                    onUpdate={handleSaveProject}
                    onCancel={handleCancelProjectUpdate}
                />
            )}
        </div>
    );
};

export default ListProjects;
