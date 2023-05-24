import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import React from 'react'

const MuiCard = () => {
    return (
        <>
            <Typography variant="h4">MUI Card</Typography>

            <Box width="300px">
                <Card>
                    <CardMedia component="img" height="140px" image="https://images.unsplash.com/photo-1555066931-4365d14bab8c" alt="unsplash image" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">React</Typography>
                        <Typography variant="body2" color="text.secondary" textAlign="justify" sx={{ textAlignLast: "left" }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam repellendus odit vero rem necessitatibus laboriosam temporibus ad, veritatis inventore doloremque quaerat porro ut, reprehenderit asperiores. Assumenda quidem sit quod voluptates!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default MuiCard