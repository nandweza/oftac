import React, { useState } from 'react';
import axios from 'axios';
import './newProject.css';
import ReactQuill from 'react-quill'; // Import ReactQuill
import 'react-quill/dist/quill.snow.css';

const NewProject = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        img: null,
    });

    const handleChange = (e) => {
        if (e.target.name === 'img') {
            // console.log('Selected image:', e.target.files[0]);
            // Handle the image input separately
            setFormData({
                ...formData,
                img: e.target.files[0], // Use the first file from the input
            });
        } else {
            // Handle other form fields
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log('Form Data:', formData);
        const formDataToSend = new FormData();
        // Append all form data including the image to the FormData object
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
    
        try {
            // const response = await axios.post('https://oftac-backend.onrender.com/api/project', formDataToSend);
            const response = await axios.post('https://oftac-backend.onrender.com/api/project', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Make sure the content type is set correctly
                },
            });

    
            // Handle success, reset the form, or navigate to another page
            console.log('Project added:', response.data);
            setFormData({ title: '', img: null, content: '' });
        } catch (error) {
            // Handle error, display a message to the user
            console.error('Error adding project:', error);
            console.log(error.response); // Log the error response for more details
        }
    };

    return (
        <form onSubmit={handleSubmit} className=''>
            <h5>Add Project Details</h5>
            <div className='form-group p-2'>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className='form-control'
                />
            </div>
            <div className='form-group p-2'>
                <label htmlFor="img">Image:</label>
                <input
                    type="file"
                    id="img"
                    name="img"
                    accept='image/*'
                    onChange={handleChange}
                    className='form-control'
                />
            </div>
            <div className='form-group p-2'>
                <label htmlFor="content">Content:</label>
                <ReactQuill
                    value={formData.content}
                    onChange={(value) => setFormData({ ...formData, content: value })}
                    className='content'
                />
            </div>
            <div className='d-grid gap-2'>
                <button 
                    type="submit"
                    className='btn btn-lg btn-dark mt-5'
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default NewProject;
