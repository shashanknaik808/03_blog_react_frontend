import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

function Auth() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [isSignup, setIsSignup] = useState(false);

    function handleChange(e) {
        setInputs(function (prevState) {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            };
        });
    }

    async function sendRequest(type) {
        const res = await axios.post(`http://localhost:5000/api/user/${type}`, {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password
        }).catch(err => console.log(err))
        console.log(res);
        let data = await res.data;
        console.log(data);
        return data;
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
        if (isSignup) {
            sendRequest("signup").then(data => console.log(data))
        } else {
            sendRequest("login").then(data => console.log(data))
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                    maxWidth={400}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    boxShadow={"10px 10px 20px #ccc"}
                    padding={3}
                    margin={"auto"}
                    marginTop={5}
                    borderRadius={5}
                >
                    <Typography variant='h2' padding={3} textAlign={"center"}>{isSignup ? "Signup" : "Login"}</Typography>

                    {isSignup &&
                        <TextField name='name' onChange={handleChange} value={inputs.name} type='name' placeholder='Name' margin='normal' />}{" "}
                    <TextField name='email' onChange={handleChange} type='email' value={inputs.email} placeholder='Email' margin='normal' />
                    <TextField name='password' onChange={handleChange} type='password' value={inputs.password} placeholder='Password' margin='normal' />
                    <Button type='submit' variant='contained' sx={{ borderRadius: 3, marginTop: 3 }} color='warning'>Submit</Button>
                    <Button onClick={() => setIsSignup(!isSignup)} sx={{ borderRadius: 3, marginTop: 3 }}>Change to {isSignup ? "Login" : "Signup"}</Button>
                </Box>
            </form>
        </div>
    );
}

export default Auth;
