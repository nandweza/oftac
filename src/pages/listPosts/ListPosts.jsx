import './listPosts.css'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ListPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch the list of projects from the backend when the component mounts
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://oftac-backend.onrender.com/api/post');
                setPosts(response.data.posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const handleDelete = async (postId) => {
        try {
            // Send a DELETE request to delete the project by ID
            await axios.delete(`https://oftac-backend.onrender.com/api/post/${postId}`);
      
            // Remove the deleted project from the state
            setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div className='admin'>
            <Topbar />
            <div className='adminContent'>
                <Sidebar />
                <div className='adminPanel'>
                    <h2>List of Posts</h2>
                    <ul>
                        {posts.map((post) => (
                            <li key={post._id}>
                                <h3>{post.title}</h3>
                                <img src={`https://oftac-backend.onrender.com/uploads/${post.img}`} alt={post.title} />
                                <p>{post.content}</p>
                                <button 
                                    onClick={() => handleDelete(post._id)}
                                    className='btn btn-lg btn-danger fw-bold'
                                >
                                    Delete
                                </button>
                                {/* Add an update button that opens a popup form for updating the post */}
                                {/* <button onClick={() => handleUpdate(post)}>Update</button> */}
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ListPosts;
