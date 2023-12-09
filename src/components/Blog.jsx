import { Avatar, Card, CardHeader } from '@mui/material'
import React from 'react';

function Blog() {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
            </Card>
        </div>
    )
}

export default Blog;