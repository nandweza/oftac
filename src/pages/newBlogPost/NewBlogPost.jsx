import React, { useState } from 'react';
import axios from 'axios';
import './newBlogPost.css';

const NewBlogPost = () => {
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
    
        const formDataToSend = new FormData();
        // Append all form data including the image to the FormData object
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
    
        try {
            const response = await axios.post('https://oftac-backend.onrender.com/api/post', formDataToSend);
    
            // Handle success, reset the form, or navigate to another page
            console.log('Project added:', response.data);
            setFormData({ title: '', img: '', content: '' });
        } catch (error) {
            // Handle error, display a message to the user
            console.error('Error adding project:', error);
            console.log(error.response); // Log the error response for more details
        }
    };    

    return (
        <form onSubmit={handleSubmit}>
            <h5>Blog Post</h5>
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
                <label htmlFor="image">Image:</label>
                <input
                    type="file" // Use a file input for image uploads
                    id="img"
                    name="img"
                    onChange={handleChange}
                    className='form-control'
                />
            </div>
            <div className='form-group p-2'>
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    className='form-control'
                    cols="10"
                    rows="5"
                ></textarea>
            </div>
            <div className='p-2'>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default NewBlogPost;
