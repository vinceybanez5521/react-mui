import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MuiAccordion = () => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (isExpanded, panel) => {
        console.log(isExpanded);
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <>
            <Typography variant="h4">MUI Accordion</Typography>

            <Accordion expanded={expanded === "panel1"} onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}>
                <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat expedita accusamus dolor recusandae quam at maxime, delectus corporis, sint harum nostrum magni architecto ad reiciendis tempora debitis repellendus excepturi deleniti consequatur eveniet. A doloribus architecto facilis, at ullam asperiores maiores quibusdam ab eos porro laborum quia nihil rerum quas reiciendis.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel2"} onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}>
                <AccordionSummary id="panel2-header" aria-controls="panel2-content" expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat expedita accusamus dolor recusandae quam at maxime, delectus corporis, sint harum nostrum magni architecto ad reiciendis tempora debitis repellendus excepturi deleniti consequatur eveniet. A doloribus architecto facilis, at ullam asperiores maiores quibusdam ab eos porro laborum quia nihil rerum quas reiciendis.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel3"} onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}>
                <AccordionSummary id="panel3-header" aria-controls="panel3-content" expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat expedita accusamus dolor recusandae quam at maxime, delectus corporis, sint harum nostrum magni architecto ad reiciendis tempora debitis repellendus excepturi deleniti consequatur eveniet. A doloribus architecto facilis, at ullam asperiores maiores quibusdam ab eos porro laborum quia nihil rerum quas reiciendis.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default MuiAccordion