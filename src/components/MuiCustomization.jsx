import { Box, InputBase, Stack, TextField, Typography, styled } from "@mui/material"
import React from 'react'

const MuiCustomization = () => {
    return (
        <Stack spacing={2}>
            <Box sx={styles.sxBox}>
                <Typography>
                    sx Box
                </Typography>
            </Box>
            <StyledBox sx={{
                width: 300
            }} width={400} style={{ width: 500 }}>
                <Typography>
                    styled Box
                </Typography>
            </StyledBox>
            <StyledInput disabled={true}></StyledInput>
            <StyledTextField label="First Name"></StyledTextField>
        </Stack>
    )
}

/** @type { import("@mui/material").SxProps } */
const styles = {
    sxBox: {
        bgcolor: ["red", "primary.main", "orange"],
        height: 200,
        width: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        "&:hover": {
            bgcolor: "white",
            color: "primary.main",
            border: "1px solid"
        },
        // transition: (theme) => theme.transitions.create(["bgcolor"])
        transition: (theme) => theme.transitions.create(["bgcolor"]),
        p: 3
    }
};

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: 200,
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    "&:hover": {
        backgroundColor: "white",
        color: theme.palette.primary.main,
        border: "1px solid"
    },
    transition: theme.transitions.create(["background-color", "color"], {
        duration: theme.transitions.duration.standard
    }),
    [theme.breakpoints.down("sm")]: {
        backgroundColor: "red"
    },
    [theme.breakpoints.up("md")]: {
        backgroundColor: "pink"
    },
    padding: 24
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
    color: "#333",
    "label + &": {
        marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #ced4da",
        padding: "10px 26px 10px 12px",
        "&:focus": {
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0, 123, 255, .25)",
        },
        transition: theme.transitions.create(["border-color", "box-shadow"]),
    },
    "& .Mui-disabled": {
        opacity: 0.5
    }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    ".MuiInputBase-input": {
        backgroundColor: theme.palette.primary.main,
    },
}));

export default MuiCustomization