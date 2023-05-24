import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material"
import React, { useState } from 'react'

const MuiSelect = () => {

    const [country, setCountry] = useState("");
    const [countries, setCountries] = useState([]);

    const handleChange = (e) => {
        setCountry(e.target.value);
    }

    const handleCountriesChange = (e) => {
        setCountries(e.target.value);
    }

    console.log(country);
    console.log(countries);

    return (
        <Box width="250px">
            <Typography variant="h4">MUI Select</Typography>

            <Stack spacing={2} mt={2}>
                <TextField label="Select Country" select fullWidth value={country} onChange={handleChange}>
                    <MenuItem value="PH">Philippines</MenuItem>
                    <MenuItem value="US">USA</MenuItem>
                    <MenuItem value="IN">India</MenuItem>
                    <MenuItem value="AU">Australia</MenuItem>
                </TextField>

                <TextField label="Select Countries" select fullWidth value={countries} onChange={handleCountriesChange} SelectProps={{ multiple: true }}
                    size="small" color="secondary"
                    helperText="Please select countries"
                    error>
                    <MenuItem value="PH">Philippines</MenuItem>
                    <MenuItem value="US">USA</MenuItem>
                    <MenuItem value="IN">India</MenuItem>
                    <MenuItem value="AU">Australia</MenuItem>
                </TextField>
            </Stack>
        </Box>
    )
}

export default MuiSelect