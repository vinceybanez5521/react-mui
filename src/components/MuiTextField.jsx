import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

const MuiTextField = () => {

    const [value, setValue] = useState("");

    return (
        <>
            <Typography variant="h4">MUI TextField</Typography>

            <Stack spacing={2} mt={2}>
                <Stack spacing={2} direction="row">
                    <TextField label="Name" variant="outlined" />
                    <TextField label="Name" variant="filled" />
                    <TextField label="Name" variant="standard" />
                </Stack>
                <Stack spacing={2} direction="row">
                    <TextField label="Name" variant="outlined" size="small" color="secondary" />
                    <TextField label="Name" variant="filled" size="medium" color="primary" />
                    <TextField label="Name" variant="standard" size="large" color="error" />
                </Stack>
                <Stack spacing={2} direction="row">
                    <TextField label="Name" variant="outlined" required error />
                    <TextField type="password" label="Password" variant="outlined" helperText="Do not share you password with anyone" />
                    <TextField label="Disabled" variant="outlined" disabled />
                    <TextField label="Read Only" variant="outlined" InputProps={{ readOnly: true }} />
                </Stack>
                <Stack spacing={2} direction="row">
                    <TextField type="number" label="Amount" variant="outlined" InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>
                    }} />
                    <TextField type="number" label="Weight" variant="outlined" InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>
                    }} />
                    <TextField type="password" label="Password" variant="outlined" InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <VisibilityIcon />
                        </InputAdornment>
                    }} />
                </Stack>
                <Stack spacing={2} direction="row">
                    <TextField label="Name" variant="outlined" value={value} onChange={(e) => setValue(e.target.value)} error={!value} helperText={!value ? "Required" : "Do not share your password"} />
                </Stack>
            </Stack>
        </>
    )
}

export default MuiTextField