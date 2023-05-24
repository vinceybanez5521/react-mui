import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Typography } from "@mui/material"
import React, { useState } from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const MuiCheckbox = () => {

    const [agree, setAgree] = useState(false);
    const [bookmark, setBookmark] = useState(false);
    const [skills, setSkills] = useState([]);

    const handleAgreeChange = (e) => {
        setAgree(e.target.checked);
    }

    const handleBookmarkChange = (e) => {
        setBookmark(e.target.checked);
    }

    // console.log(agree);
    // console.log(bookmark);

    const handleSkillsChange = (e) => {
        const index = skills.indexOf(e.target.value);
        if (index === -1) {
            setSkills(prev => [...prev, e.target.value]);
        } else {
            setSkills(prev => prev.filter(skill => skill !== e.target.value));
        }
    }

    console.log(skills);

    return (
        <>
            <Typography variant="h4">MUI Checkbox</Typography>

            <Box>
                <FormControlLabel label="I agree with the terms and conditions" control={<Checkbox checked={agree} onChange={handleAgreeChange} size="small" color="secondary" />} />
            </Box>

            <Box>
                <Checkbox icon={<BookmarkBorderOutlinedIcon />} checkedIcon={<BookmarkIcon />} checked={bookmark} onChange={handleBookmarkChange} />
            </Box>

            <Box>
                <FormControl error>
                    <FormLabel id="skills-group">Skills</FormLabel>
                    <FormGroup aria-labelledby="skills-group" row>
                        <FormControlLabel control={<Checkbox checked={skills.includes("html")} onChange={handleSkillsChange} />} label="HTML" value="html" />
                        <FormControlLabel control={<Checkbox checked={skills.includes("css")} onChange={handleSkillsChange} />} label="CSS" value="css" />
                        <FormControlLabel control={<Checkbox checked={skills.includes("js")} onChange={handleSkillsChange} />} label="Javscript" value="js" />
                    </FormGroup>
                    <FormHelperText>Please select your skills</FormHelperText>
                </FormControl>
            </Box>
        </>
    )
}

export default MuiCheckbox