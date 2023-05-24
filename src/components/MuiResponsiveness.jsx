import { Box, styled } from "@mui/material"
import React from 'react'

const CustomBox = styled(Box)(({ theme }) => (
    {
        width: 500,
        height: 500,
        // backgroundColor: theme.status.danger,
        // backgroundColor: theme.palette.neutral.main,
        backgroundColor: theme.palette.neutral.darker,
        color: "white"
    }
));

const MuiResponsiveness = () => {
    return (
        <>
            <Box sx={{
                height: "300px",
                width: {
                    xs: "100px", // 0
                    sm: "200px", // 600
                    md: "300px", // 900
                    lg: "400px", // 1200
                    xl: "500px", // 1536
                },
                bgcolor: "secondary.main"
            }}></Box>

            <CustomBox sx={{ mt: 5, p: 5 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim doloremque ipsum quaerat aut illum magni est repellendus nemo quis omnis dolores tempore aspernatur illo mollitia doloribus nihil, odio voluptate ad officia fugit. Magnam sunt nulla necessitatibus fugit aspernatur temporibus, inventore voluptatem delectus recusandae odio iste, optio ipsa quidem ducimus molestiae.
            </CustomBox>
        </>
    )
}

export default MuiResponsiveness