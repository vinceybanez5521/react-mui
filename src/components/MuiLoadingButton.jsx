import { LoadingButton } from "@mui/lab"
import { Stack } from "@mui/material"
import React from 'react'
import SaveIcon from "@mui/icons-material/Save"

const MuiLoadingButton = () => {
    return (
        <Stack spacing={2} direction="row">
            <LoadingButton variant="outlined">Submit</LoadingButton>
            <LoadingButton loading variant="outlined">Submit</LoadingButton>
            <LoadingButton loadingIndicator="Loading..." variant="outlined">Fetch Data</LoadingButton>
            <LoadingButton loadingIndicator="Loading..." variant="outlined" loading>Fetch Data</LoadingButton>
            <LoadingButton variant="outlined" loadingPosition="start" startIcon={<SaveIcon />}>Save</LoadingButton>
            <LoadingButton variant="outlined" loadingPosition="start" startIcon={<SaveIcon />} loading>Save</LoadingButton>
        </Stack>
    )
}

export default MuiLoadingButton