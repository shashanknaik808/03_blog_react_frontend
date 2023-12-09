import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Box,
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
} from '@mui/material';

function Header(props) {
    const [value, setValue] = useState(1);

    function handleLogout() {
        localStorage.clear();
        props.setIsLoggedIn(false);
    }

    return (
        <div>
            <AppBar
                position="sticky"
                sx={{
                    background:
                        'linear-gradient(324deg, rgba(2,0,36,1) 0%, rgba(3,2,51,1) 6%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
                }}
            >
                <Toolbar>
                    <Typography variant="h4">Blog App</Typography>

                    {props.isLoggedIn && (
                        <Box display={'flex'} marginLeft={'auto'} marginRight={'auto'}>
                            <Tabs
                                textColor="inherit"
                                value={value}
                                onChange={(e, val) => setValue(val)}>
                                <Tab
                                    LinkComponent={Link}
                                    to="/blogs"
                                    label="All Blogs" />
                                <Tab
                                    LinkComponent={Link}
                                    to="/myBlogs"
                                    label="My Blogs" />
                                <Tab LinkComponent={Link} to="/blogs/add" label="Add Blogs" />
                            </Tabs>
                        </Box>
                    )}

                    <Box display={'flex'} marginLeft={'auto'}>
                        {!(props.isLoggedIn) &&
                            <>
                                <Button
                                    LinkComponent={Link}
                                    to="/auth"
                                    variant="contained"
                                    sx={{ margin: 1, borderRadius: 10 }}
                                    color="warning"
                                >
                                    Login
                                </Button>

                                <Button
                                    LinkComponent={Link}
                                    to="/auth"
                                    variant="contained"
                                    sx={{ margin: 1, borderRadius: 10 }}
                                    color="warning"
                                >
                                    Signup
                                </Button>
                            </>
                        }
                        {props.isLoggedIn && (
                            <Button
                                onClick={handleLogout}
                                LinkComponent={Link}
                                to="/auth"
                                variant="contained"
                                sx={{ margin: 1, borderRadius: 10 }}
                                color="warning"
                            >
                                Logout
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
