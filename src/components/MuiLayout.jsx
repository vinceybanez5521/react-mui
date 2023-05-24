import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material"
import React from 'react'

const MuiLayout = () => {
    return (
        <Paper sx={{
            p: "32px"
        }}
            elevation={10}>
            <Typography variant="h4">MUI Layout</Typography>

            <Box component="section" p="10px">
                <Typography variant="h5">News</Typography>

                <Box display="flex" gap={2} textAlign="justify" mt={2}>
                    <Box component="article"
                        sx={{
                            backgroundColor: "primary.main",
                            color: "white",
                            padding: "10px",
                            "&:hover": {
                                backgroundColor: "primary.light"
                            }
                        }}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique minima. Laborum harum reprehenderit voluptatem tenetur nisi, debitis suscipit omnis pariatur cum tempore sint, quis at quibusdam repellendus, dolores dolore recusandae voluptate earum placeat error perspiciatis. Rem eligendi necessitatibus ipsa repellendus aliquam a architecto, maxime molestias quasi minus dolore at?
                        </Typography>
                    </Box>
                    <Box component="article">
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique minima. Laborum harum reprehenderit voluptatem tenetur nisi, debitis suscipit omnis pariatur cum tempore sint, quis at quibusdam repellendus, dolores dolore recusandae voluptate earum placeat error perspiciatis. Rem eligendi necessitatibus ipsa repellendus aliquam a architecto, maxime molestias quasi minus dolore at?
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box>
                <Typography variant="h5">Sports</Typography>

                <Stack sx={{
                    border: "1px solid black",
                    padding: "10px",
                    mt: 2
                }}
                    direction="row"
                    spacing={2}
                    divider={<Divider orientation="vertical" flexItem sx={{ width: "1px", backgroundColor: "steelblue" }} />}
                >
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sapiente nobis facere voluptatum eos perspiciatis, minus doloremque, eligendi amet assumenda animi sunt dignissimos culpa doloribus aspernatur molestiae vel id mollitia.
                    </Typography>
                    <Typography>
                        A lorem ipsum dolor sit amet consectetur adipisicing elit. Est sapiente nobis facere voluptatum eos perspiciatis, minus doloremque, eligendi amet assumenda animi sunt dignissimos culpa doloribus aspernatur molestiae vel id mollitia.
                    </Typography>
                </Stack>
            </Box>

            <Grid container mt={2} rowSpacing={2} columnSpacing={2}>
                <Grid item xs={6}>
                    <Box bgcolor="primary.light" p="10px">Item 1</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor="primary.light" p="10px">Item 2</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor="primary.light" p="10px">Item 3</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor="primary.light" p="10px">Item 4</Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default MuiLayout