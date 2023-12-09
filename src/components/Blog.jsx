import { Avatar, Card, CardHeader, CardMedia } from '@mui/material'
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
                <CardMedia
                    component="img"
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Paella dish"
                />

            </Card>
        </div>
    )
}

export default Blog;