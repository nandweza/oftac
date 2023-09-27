import './blogCard.css';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ReactHtmlParser from "react-html-parser";

// Helper function to truncate text to a specified length
const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text; // Return the text as-is if it's shorter than or equal to maxLength
    } else {
        return text.slice(0, maxLength) + '...'; // Truncate and add ellipsis
    }
};

const BlogCard = ({ post }) => {
    // Truncate project content to 150 characters
    const truncatedContent = truncateText(post.content, 150);

    return (
        <div className='card'>
            <img
                src={`/uploads/${post.img}`}
                alt={post.title}
                width='100%'
                height='200'
            />
            <h5 className='p-2'>{post.title}</h5>
            <p className='p-2'>
                {ReactHtmlParser(truncatedContent)}
            </p>
            <a href={`/#/news/${post._id}`} className='p-2'>
                Read More <ArrowRightAltIcon />
            </a>
        </div>
    );
};

export default BlogCard;
