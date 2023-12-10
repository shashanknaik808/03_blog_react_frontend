import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Blog from './Blog';

function UserBlog() {
    const [user, setUser] = useState();
    const id = localStorage.getItem("userID");

    async function sendRequest() {
        const res = await axios.get(`http://localhost:5000/api/blog/user/${id}`)
            .catch(err => console.log(err))
        const data = await res.data;
        return data;
    }

    useEffect(() => {
        sendRequest()
            .then((data) => setUser(data.user))
    }, [])

    return (
        <div>
            <>
                {" "}
                {user && user.blogs && user.blogs.map((blog, index) => (
                    <Blog key={index}
                        isUser={true}
                        id={blog._id}
                        user={user.name}
                        description={blog.description}
                        imageURL={blog.image}
                        title={blog.title} />
                ))}
            </>
        </div>
    )
}

export default UserBlog;