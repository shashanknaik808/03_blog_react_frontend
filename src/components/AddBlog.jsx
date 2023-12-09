import React, { useState } from 'react';
import { Box, Button, Typography, InputLabel, TextField } from '@mui/material';
import axios from 'axios';

const labelStyle = { mb: 1, mt: 2, fontSize: '24px', fontWeight: 'bold' }

function AddBlog() {

    const [inputs, setInputs] = useState({
        title: "", description: "", imageURL: ""
    })

    function handleChange(e) {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
        );
    }

    async function sendRequest() {
        const res = await axios.post(`http://localhost:5000/api/blog/add`, {
            title: inputs.title,
            description: inputs.description,
            image: inputs.imageURL,
            user: localStorage.getItem("userID")
        }).catch(err => console.log(err))
        const data = await res.data;
        return data;
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(data => console.log(data))
    }

    return (
        <div>
            <form>
                <Box>
                    <Typography>Post your Blog</Typography>
                    <InputLabel>Title</InputLabel>
                    <TextField />
                    <InputLabel>Description</InputLabel>
                    <TextField />
                    <InputLabel>ImageURL</InputLabel>
                    <TextField />
                </Box>
            </form>
        </div>
    )
}

export default AddBlog;