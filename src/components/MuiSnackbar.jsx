import { Alert, Button, Snackbar } from "@mui/material"
import React, { useState, forwardRef } from 'react'

const SnackbarAlert = forwardRef((props, ref) => {
    return <Alert elevation={6} ref={ref} {...props}></Alert>
});

const MuiSnackbar = () => {

    const [open, setOpen] = useState(false);

    const handleClose = (e, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    }

    return (
        <>
            <Button onClick={() => setOpen(true)}>Submit</Button>

            {/* <Snackbar open={open}
                message="Form submitted successfully!"
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }} /> */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <SnackbarAlert onClose={handleClose} severity="success" variant="filled">
                    Form submitted successfully!
                </SnackbarAlert>
            </Snackbar>
        </>
    )
}

export default MuiSnackbar