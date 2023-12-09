import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import Blog from './Blog.jsx';

function Blogs() {

    const [blogs, setBlogs] = useState([]);

    async function sendRequest() {
        const res = await axios
            .get(`http://localhost:5000/api/blog`)
            .catch(err => console.log(err))
        const data = await res.data;
        return data;
    };

    useEffect(() => {
        sendRequest()
            .then(data => setBlogs(data.blogs));
    }, []);


    return (
        <div>
            {(blogs.length != 0) && blogs.map((blog, index) =>
                <Blog
                    id={blog._id}
                    isUser={localStorage.getItem("userID") === blog.user._id}
                    user={blog.user.name}
                    description={blog.description}
                    imageURL={blog.image}
                    title={blog.title} />
            )}
        </div>
    )
}

export default Blogs;