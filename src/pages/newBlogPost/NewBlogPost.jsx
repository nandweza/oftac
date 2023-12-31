import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill'; // Import ReactQuill
import 'react-quill/dist/quill.snow.css'; // Import styles
import './newBlogPost.css';

const NewBlogPost = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        img: null,
    });

    const handleChange = (e) => {
        if (e.target.name === 'img') {
            setFormData({
                ...formData,
                img: e.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
    
        try {
            const response = await axios.post('https://oftac-backend.onrender.com/api/post', formDataToSend);
            console.log('POST added:', response.data);
            setFormData({ title: '', img: '', content: '' });
        } catch (error) {
            console.error('Error adding post:', error);
            console.log(error.response);
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
                    type="file"
                    id="img"
                    name="img"
                    onChange={handleChange}
                    className='form-control'
                />
            </div>
            <div className='form-group p-2'>
                <label htmlFor="content">Content:</label>
                {/* Use only ReactQuill for content input */}
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

export default NewBlogPost;
