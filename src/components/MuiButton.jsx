import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatBoldIcon from '@mui/icons-material/FormatBold';

const MuiButton = () => {

    const [formats, setFormats] = useState([]);

    const handleFormatChange = (e, updatedFormats) => {
        setFormats(updatedFormats);
    }

    console.log(formats);

    return (
        <>
            <Typography variant="h4">MUI Button</Typography>

            <Stack spacing={2} direction="row">
                <Button variant="text" href="https://www.google.com" target="_blank">text</Button>
                <Button variant="contained">contained</Button>
                <Button variant="outlined">outlined</Button>
            </Stack>

            {/* color */}
            <Stack spacing={2} direction="row" mt={2}>
                <Button variant="contained" color="primary">primary</Button>
                <Button variant="contained" color="secondary">secondary</Button>
                <Button variant="contained" color="warning">warning</Button>
                <Button variant="contained" color="success">success</Button>
                <Button variant="contained" color="error">success</Button>
                <Button variant="contained" color="info">info</Button>

                <Button variant="text" color="error">text error</Button>
                <Button variant="outlined" color="error">text error</Button>
            </Stack>

            {/* size */}
            <Stack display="block" spacing={2} direction="row" mt={2}>
                <Button variant="contained" color="primary" size="small">small</Button>
                <Button variant="contained" color="primary" size="medium">medium</Button>
                <Button variant="contained" color="primary" size="large">large</Button>
            </Stack>

            {/* add icon */}
            <Stack display="block" spacing={2} direction="row" mt={2}>
                <Button variant="contained" color="primary" size="small" startIcon={<SendIcon />}>send</Button>
                <Button variant="contained" color="primary" size="small" endIcon={<SendIcon />} disableElevation disableRipple onClick={() => alert("Hello World!")}>send</Button>
                <Button variant="contained" color="primary" size="small" startIcon={<SendIcon />} endIcon={<SendIcon />}>send</Button>

                {/* IconButton */}
                <IconButton aria-label="send button" color="primary" size="large">
                    <SendIcon />
                </IconButton>
                <IconButton aria-label="send button" color="primary" size="large">
                    <SendIcon />
                </IconButton>
            </Stack>

            <Typography variant="h4">MUI Button Group</Typography>
            <Stack direction="row">
                <ButtonGroup variant="contained" orientation="vertical" size="large" color="secondary" aria-label="alignment button group">
                    <Button onClick={() => alert("Left Clicked")}>Left</Button>
                    <Button onClick={() => alert("Center Clicked")}>Center</Button>
                    <Button onClick={() => alert("Right Clicked")}>Right</Button>
                </ButtonGroup>
            </Stack>

            <Typography variant="h4">MUI Toggle Button</Typography>
            <Stack direction="row">
                <ToggleButtonGroup aria-label="text formatting button group" value={formats} onChange={handleFormatChange} size="large" color="success" orientation="vertical" exclusive>
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </>
    )
}

export default MuiButton