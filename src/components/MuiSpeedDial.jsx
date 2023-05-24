import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"
import React from 'react'
import CopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';

const MuiSpeedDial = () => {
    return (
        <SpeedDial
            ariaLabel="Navigation speed dial"
            sx={{
                position: "absolute",
                bottom: 16,
                right: 16
            }}
            icon={<SpeedDialIcon openIcon={<EditIcon />} />}>
            <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy" tooltipOpen={true} onClick={() => alert("Copied")} />
            <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" tooltipOpen={true} />
            <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" tooltipOpen={true} />
        </SpeedDial>
    )
}

export default MuiSpeedDial