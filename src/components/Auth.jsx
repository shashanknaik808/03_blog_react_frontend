import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Auth = () => {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    });
    
    const [isSignup, setIsSignup] = useState(false);

    return (
        <div>
            Hello
        </div>
    );
}

export default Auth;
