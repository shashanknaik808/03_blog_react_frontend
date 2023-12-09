import React, { useState } from 'react';
import Blog from './Blog';
import axios from 'axios';

function UserBlog() {
    const [blogs, setBlogs] = useState([]);
    const id = localStorage.getItem("userID");

    async function sendRequest() {
        const res = await axios.get(`http://localhost:5000/api/blog/user/${id}`)
            .catch(err => console.log(err))
        const data = await res.data;
        return data;
    }

    return (
        <div>
            <>
                {(blogs.length !== 0) && blogs.map((blog, index) => (
                    <Blog
                        user={blog.user.name}
                        description={blog.description}
                        imageURL={blog.image}
                        title={blog.title} />
                ))}
            </>
        </div>
    )
}

export default UserBlog;