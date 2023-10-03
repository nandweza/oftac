import React, { useState } from 'react';

const UpdateProject = ({ project, onUpdate, onCancel }) => {
    const [updatedProject, setUpdatedProject] = useState({ ...project });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProject({ ...updatedProject, [name]: value });
    };

    const handleSubmit = () => {
        // Call the onUpdate callback to update the project
        onUpdate(updatedProject);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Edit Project</h3>
                <input
                    type="text"
                    name="title"
                    value={updatedProject.title}
                    onChange={handleInputChange}
                />
                <textarea
                    name="content"
                    value={updatedProject.content}
                    onChange={handleInputChange}
                />
                <button onClick={handleSubmit}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default UpdateProject;
