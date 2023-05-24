import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MuiBreadcrumbs = () => {
    return (
        <Box m={2}>
            <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} maxItems={3} itemsAfterCollapse={2} itemsBeforeCollapse={2}>
                <Link underline="hover" href="#">Home</Link>
                <Link underline="hover" href="#">Catalog</Link>
                <Link underline="hover" href="#">Accessories</Link>
                <Typography color="text.primary">Shoes</Typography>
            </Breadcrumbs>
        </Box>
    )
}

export default MuiBreadcrumbs