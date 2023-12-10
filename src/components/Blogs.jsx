import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Blog from './Blog';

function Blogs() {
    const [blogs, setBlogs] = useState([]);

    async function sendRequest() {
        const res = await axios.get("http://localhost:5000/api/blog")
            .catch(err => console.log(err));
        const data = await res.data;
        return data;
    };

    useEffect(() => {
        sendRequest().then((data) => setBlogs(data.blogs));
    }, []);

    return (
        <div>
            {blogs.length !== 0 &&
                blogs.map((blog, index) => (
                    <Blog
                        key={index}
                        userName={blog.user.name}
                        description={blog.description}
                        imageURL={blog.image}
                        title={blog.title}
                    />
                ))
            }
        </div>
    )
}

export default Blogs;
