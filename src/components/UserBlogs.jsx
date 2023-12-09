import React, { useState } from 'react';

function UserBlogs() {
    const [blogs, setBlogs] = useState([]);
    const id = localStorage.getItem("userID");

    async function sendRequest() {
        const res = await axios.get(`http://localhost:5000/api/blog/user/${id}`)
            .catch(err => console.log(err))
        const data = await res.data;
        return data;
    }

    return (
        <div>UserBlogs</div>
    )
}

export default UserBlogs;