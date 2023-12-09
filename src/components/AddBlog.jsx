import { Box, InputLabel, TextField, Typography } from '@mui/material'

function AddBlog() {
    return (
        <div>
            <form>
                <Box>
                    <Typography>Post your Blog</Typography>
                    <InputLabel>Title</InputLabel>
                    <TextField />
                    <InputLabel>Description</InputLabel>
                    <TextField />
                    <InputLabel>ImageURL</InputLabel>
                    <TextField />
                </Box>
            </form>
        </div>
    )
}

export default AddBlog;