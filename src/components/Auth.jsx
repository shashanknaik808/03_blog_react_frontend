import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Auth(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "", email: "", password: ""
    })
    const [isSignup, setIsSignup] = useState(false);

    function handleChange(e) {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    async function sendRequest(type) {
        try {
            const res = await axios.post(`http://localhost:5000/api/user/${type}`, {
                name: inputs.name,
                email: inputs.email,
                password: inputs.password
            });
            return res.data;
        } catch (err) {
            console.error("Error in sendRequest:", err);
            if (err.response && err.response.status === 404) {
                alert("User does not exist");
                props.setIsLoggedIn(false);
            } else if (err.response && err.response.status === 400) {
                alert("Invalid password");
                props.setIsLoggedIn(false);
            }
            throw err;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isSignup) {
            sendRequest("signup")
                .then(data => navigate("/auth"))
                .catch(err => console.error("Error in signup:", err));
        } else {
            sendRequest('login')
                .then(data => {
                    if (data && data.message === 'Login Successful') {
                        console.log("Login successful");
                        props.setIsLoggedIn(true);
                        navigate("/blogs");
                    } else {
                        console.error("Invalid response format from login request:", data);
                    }
                })
                .catch(err => console.error("Error in login:", err));
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                    maxWidth={400}
                    display={"flex"}
                    alignItems={'center'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    boxShadow={'10px 10px 20px #ccc'}
                    padding={3}
                    margin={'auto'}
                    marginTop={5}
                    borderRadius={5}>
                    <Typography variant='h2' padding={3} textAlign={'center'}>
                        {isSignup ? "Sign Up" : "Login"}
                    </Typography>

                    {isSignup && <TextField name='name' onChange={handleChange} value={inputs.name} placeholder='Name' margin='normal' />}
                    <TextField name='email' onChange={handleChange} value={inputs.email} type={'email'} placeholder='Email' margin='normal' />
                    <TextField name='password' onChange={handleChange} value={inputs.password} type={'password'} placeholder='Password' margin='normal' />
                    <Button type='submit' variant='contained' sx={{ borderRadius: 3, marginTop: 3 }} color='warning'>Submit</Button>
                    <Button onClick={() => setIsSignup(!isSignup)} sx={{ borderRadius: 3, marginTop: 3 }}>
                        Change To {isSignup ? "Login" : "Signup"}
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default Auth;