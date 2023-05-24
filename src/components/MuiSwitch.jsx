import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Switch, Typography } from "@mui/material"
import React, { useState } from 'react'

const MuiSwitch = () => {

    const [checked, setChecked] = useState(false);
    const [switches, setSwitches] = useState([]);

    const handleChange = (e) => {
        setChecked(e.target.checked);
    }

    const handleSwitchesChange = (e) => {
        let index = switches.indexOf(e.target.value);

        if (index === -1) {
            setSwitches(prev => [...prev, e.target.value]);
        } else {
            setSwitches(prev => prev.filter(s => s !== e.target.value));
        }
    }

    console.log({ checked });
    console.log(switches);

    return (
        <>
            <Typography variant="h4">MUI Switch</Typography>

            <Box>
                <FormControlLabel control={<Switch checked={checked} onChange={handleChange} size="small" color="success" />} label="Dark Mode" />
            </Box>

            <Box mt={2}>
                <FormControl>
                    <FormLabel>Switches</FormLabel>
                    <FormGroup>
                        <FormControlLabel label="Switch 1" value="switch1" control={<Checkbox checked={switches.includes("switch1")} onChange={handleSwitchesChange} />} />
                        <FormControlLabel label="Switch 2" value="switch2" control={<Checkbox checked={switches.includes("switch2")} onChange={handleSwitchesChange} />} />
                        <FormControlLabel label="Switch 3" value="switch3" control={<Checkbox checked={switches.includes("switch3")} onChange={handleSwitchesChange} />} />
                    </FormGroup>
                </FormControl>
            </Box>
        </>
    )
}

export default MuiSwitch