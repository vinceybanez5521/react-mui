import { Avatar, AvatarGroup, Stack } from "@mui/material"
import React from 'react'

const MuiAvatar = () => {
    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={1}>
                <Avatar sx={{
                    backgroundColor: "primary.light"
                }}>BW</Avatar>
                <Avatar sx={{
                    backgroundColor: "success.light"
                }}>CK</Avatar>
            </Stack>
            <Stack direction="row" spacing={1}>
                <AvatarGroup max={3}>
                    <Avatar sx={{
                        backgroundColor: "primary.light"
                    }}>BW</Avatar>
                    <Avatar sx={{
                        backgroundColor: "success.light"
                    }}>CK</Avatar>
                    <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" alt="Jane Doe" />
                    <Avatar src="https://randomuser.me/api/portraits/men/79.jpg" alt="John Doe" />
                </AvatarGroup>
            </Stack>
            <Stack direction="row" spacing={1}>
                <Avatar variant="square" sx={{
                    backgroundColor: "primary.light",
                    width: 48,
                    height: 48,
                }}>BW</Avatar>
                <Avatar variant="rounded" sx={{
                    backgroundColor: "success.light",
                    width: 48,
                    height: 48,
                }}>CK</Avatar>
                <Avatar variant="circular" sx={{
                    backgroundColor: "success.light",
                    width: 48,
                    height: 48,
                }}>CK</Avatar>
            </Stack>
        </Stack>
    )
}

export default MuiAvatar