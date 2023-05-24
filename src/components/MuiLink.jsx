import { Link, Stack, Typography } from "@mui/material"
import React from 'react'

const MuiLink = () => {
    return (
        <>
            <Stack spacing={2} direction="row" m={4}>
                <Link href="#">Link</Link>
                <Link href="#" color="secondary">Secondary</Link>
                <Link href="#" underline="hover">Underline on hover</Link>
                <Link href="#" underline="none">No underline</Link>
                <Typography variant="h6">
                    <Link href="#" underline="none">Link</Link>
                </Typography>
            </Stack>
        </>
    )
}

export default MuiLink