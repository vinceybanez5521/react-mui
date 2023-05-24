import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import React, { useState } from 'react'

const MuiDialog = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>

            <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="dialog-title">
                <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
                <DialogContent aria-describedby="dialog-description">
                    <DialogContentText id="dialog-description">
                        Are you sure you want to submit the test?
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button autoFocus onClick={() => setOpen(false)}>Submit</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default MuiDialog