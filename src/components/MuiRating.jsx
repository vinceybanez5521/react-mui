import { Rating, Stack, Typography } from "@mui/material"
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MuiRating = () => {

    const [rating, setRating] = useState(0);

    const handleChange = (e, value) => {
        setRating(value);
    }

    console.log(rating);

    return (
        <>
            <Typography variant="h4">MUI Rating</Typography>

            <Stack spacing={2}>
                <Rating value={rating} onChange={handleChange} precision={0.5} />
                <Rating value={rating} onChange={handleChange} precision={0.5} size="large" />
                <Rating value={rating} onChange={handleChange} precision={0.5} icon={<FavoriteIcon fontSize="inherit" color="error" />} emptyIcon={<FavoriteBorderIcon fontSize="inherit" color="error" />} />
                <Rating value={rating} onChange={handleChange} precision={0.5} readOnly />
                <Rating value={rating} onChange={handleChange} precision={0.5} highlightSelectedOnly />
            </Stack>
        </>
    )
}

export default MuiRating