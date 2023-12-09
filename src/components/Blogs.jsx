import axios from 'axios';
import React, { useState } from 'react';

function Blogs() {

    const [blogs, setBlogs] = useState([]);

    async function sendRequest() {
        const res = await axios.get("http://localhost:5000/api/blog")
            .catch(err => console.log(err));
        const data = await res.data;
        return data;
    };

    return (
        <div>Blogs</div>
    )
}

export default Blogs;