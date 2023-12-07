import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography
} from '@mui/material';
import React from 'react';

function Header() {
    return (
        <div>
            <AppBar position="sticky" sx={{ background: 'linear-gradient(324deg, rgba(2,0,36,1) 0%, rgba(3,2,51,1) 6%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);' }}>
                <Toolbar>
                    <Typography variant='h4'>
                        Blog App
                    </Typography>
                    <Box display={"flex"} marginLeft={"auto"}>
                        <Button variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning'>Login</Button>
                        <Button variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning'>Signup</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;