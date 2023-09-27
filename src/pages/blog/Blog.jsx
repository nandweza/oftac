import './blog.css';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import BlogCard from '../../components/blogCard/BlogCard';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://oftac-backend.onrender.com/api/post');
                setPosts(response.data.posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
                console.log(error.response);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='section-bg blog'>
                <div className='container'>
                    <div className='blog-grid'>
                        {posts.map((post) => (
                            // Use the BlogCard component to display post details
                            <BlogCard key={post._id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog;
