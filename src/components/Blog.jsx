import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';

function Blog(props) {

    console.log(props.title, props.isUser);
    const navigate = useNavigate();

    function handleEdit(e) {
        navigate(`/myBlogs/${props.id}`)
    }

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