import { Badge, Stack } from "@mui/material"
import React from 'react'
import MailIcon from "@mui/icons-material/Mail"

const MuiBadge = () => {
    return (
        <Stack spacing={2} direction="row">
            <Badge badgeContent={5} color="primary">
                <MailIcon />
            </Badge>
            <Badge badgeContent={5} color="secondary">
                <MailIcon color="secondary" />
            </Badge>
            <Badge badgeContent={0} color="secondary" showZero>
                <MailIcon color="secondary" />
            </Badge>
            <Badge badgeContent={1000} color="secondary" max={999}>
                <MailIcon color="secondary" />
            </Badge>
            <Badge variant="dot" color="primary" invisible={true}>
                <MailIcon />
            </Badge>
        </Stack>
    )
}

export default MuiBadge