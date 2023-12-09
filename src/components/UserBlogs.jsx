import React, { useState } from 'react';

function UserBlogs() {
    const [blogs, setBlogs] = useState([]);
    const id = localStorage.getItem("userID");

    return (
        <div>UserBlogs</div>
    )
}

export default UserBlogs;