import { Avatar, Chip, Stack } from "@mui/material"
import React, { useState } from 'react'
import FaceIcon from "@mui/icons-material/Face"

const MuiChip = () => {

    const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);

    const handleDelete = (chipToDelete) => {
        setChips(prev => prev.filter(chip => chip !== chipToDelete));
    }

    return (
        <Stack direction="row" spacing={1}>
            <Chip label="Chip" color="primary" />
            <Chip label="Chip Small" color="primary" size="small" />
            <Chip label="Chip Outlined" color="secondary" variant="outlined" />
            <Chip label="Chip Avatar" color="secondary" variant="outlined" avatar={<Avatar>CO</Avatar>} />
            <Chip label="Chip Icon" color="secondary" variant="outlined" icon={<FaceIcon />} />
            <Chip label="Chip onClick" color="success" onClick={() => alert("Hello World!")} />
            <Chip label="Chip onDelete" color="error" onClick={() => alert("Hello World!")} onDelete={() => alert("Delete handler called")} />
            <Stack direction="row">
                {
                    chips.map(chip => (
                        <Chip label={chip} onDelete={() => handleDelete(chip)} />
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default MuiChip