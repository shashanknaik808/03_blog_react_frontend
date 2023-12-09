import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react';

function Blog(props) {
    return (
        <div>
            <Card sx={{
                width: "40%",
                margin: 'auto',
                mt: 2,
                paddind: 2,
                boxShadow: "5px 5px 10px #ccc",
                ":hover": { boxShadow: "10px 10px 20px #ccc" }
            }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                            {props.userName}
                        </Avatar>
                    }
                    title={props.title}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={props.imageURL}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Blog;