import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, Typography } from "@mui/material"
import React, { useState } from 'react'

const MuiRadioButton = () => {

    const [gender, setGender] = useState("male");

    const handleChange = (e) => {
        setGender(e.target.value);
    }

    console.log(gender);

    return (
        <>
            <Box>
                <Typography variant="h4">Mui RadioButton</Typography>

                <FormControl>
                    <FormLabel id="gender-group-label">Gender</FormLabel>
                    <RadioGroup name="gender-group" aria-labelledby="gender-group-label" defaultValue="male" value={gender} onChange={handleChange} row>
                        <FormControlLabel control={<Radio size="small" color="success" />} label="Male" value="male" />
                        <FormControlLabel control={<Radio size="small" color="success" />} label="Female" value="female" />
                    </RadioGroup>
                    <FormHelperText>Please select gender</FormHelperText>
                </FormControl>
            </Box>
        </>
    )
}

export default MuiRadioButton