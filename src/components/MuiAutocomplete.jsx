import { Autocomplete, Stack, TextField, Typography } from "@mui/material"
import React, { useState } from 'react'

const MuiAutocomplete = () => {

    const skills = ["HTML", "CSS", "Javascript", "Typescript", "React"];
    const countries = [
        { id: 1, name: "Australia" },
        { id: 2, name: "Brazil" },
        { id: 3, name: "Chile" },
        { id: 4, name: "Denmark" },
        { id: 5, name: "England" },
        { id: 6, name: "Finland" },
        { id: 7, name: "Philippines" },
    ];

    const [skill, setSkill] = useState(null);
    const [country, setCountry] = useState(null);

    // console.log(skill);
    console.log(country);

    return (
        <>
            <Typography variant="h4">MUI Autocomplete</Typography>

            <Stack spacing={2} width="250px" mt={2}>
                <Autocomplete options={skills}
                    renderInput={(params) => <TextField {...params} label="Select Skill" />}
                    value={skill}
                    onChange={(e, value) => setSkill(value)}
                    freeSolo />
                <Autocomplete options={countries}
                    renderInput={(params) => <TextField {...params} label="Select Country" />}
                    value={country}
                    onChange={(e, value) => setCountry(value)}
                    getOptionLabel={option => option.name}
                    isOptionEqualToValue={(option, value) => option.name === value.name} />
            </Stack>
        </>
    )
}

export default MuiAutocomplete