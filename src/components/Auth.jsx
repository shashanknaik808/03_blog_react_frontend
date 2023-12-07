import React, { useState } from 'react';

const Auth = () => {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [isSignup, setIsSignup] = useState(false);

    const handleChange = ({ target }) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            [target.name]: target.value
        }));
    };

    return (
        shoot & scoot
    );
}

export default Auth;