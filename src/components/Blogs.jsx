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
        sendRequest()
            .then((data) => console.log(blogs));
    }, []);

    return (
        <div>
            <Blog />
            <Blog />
            <Blog />
        </div>
    )
}

export default Blogs;