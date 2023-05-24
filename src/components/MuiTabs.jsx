import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import React, { useState } from 'react'
import FavoriteIcon from "@mui/icons-material/Favorite"

const MuiTabs = () => {

    const [value, setValue] = useState("1");

    return (
        <Box>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider", width: "500px" }}>
                    <TabList aria-label="Tabs Example" onChange={(e, value) => setValue(value)} textColor="secondary" indicatorColor="secondary" centered variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
                        <Tab label="Tab One" value="1" icon={<FavoriteIcon />} iconPosition="start" />
                        <Tab label="Tab Two" value="2" disabled />
                        <Tab label="Tab Three" value="3" />
                        <Tab label="Tab Four" value="4" />
                        <Tab label="Tab Five" value="5" />
                        <Tab label="Tab Six" value="6" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    Panel 1
                </TabPanel>
                <TabPanel value="2">
                    Panel 2
                </TabPanel>
                <TabPanel value="3">
                    Panel 3
                </TabPanel>
                <TabPanel value="4">
                    Panel 4
                </TabPanel>
                <TabPanel value="5">
                    Panel 5
                </TabPanel>
                <TabPanel value="6">
                    Panel 6
                </TabPanel>
            </TabContext>
        </Box>
    )
}

export default MuiTabs