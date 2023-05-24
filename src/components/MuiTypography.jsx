import { Typography } from "@mui/material"
import React from 'react'

const MuiTypography = () => {
    return (
        <>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4">h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>

            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2">Subtitle 2</Typography>

            <Typography variant="body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quasi beatae delectus reiciendis libero eaque dolore hic, quas voluptates suscipit! Facilis saepe praesentium quaerat, ab eveniet neque cupiditate fugiat odit.
            </Typography>
            <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur recusandae, sequi corrupti doloremque quisquam ea, nihil itaque in, reiciendis fugiat veniam vero numquam architecto? Maxime sint repellat dolor non consequuntur.
            </Typography>

            {/* component */}
            <Typography variant="h4" component="div">MuiTypography</Typography>

            {/* gutterBottom */}
            <Typography variant="h4" gutterBottom>gutterBottom</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel.</Typography>
        </>
    )
}

export default MuiTypography