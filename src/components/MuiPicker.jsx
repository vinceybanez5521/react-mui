import { DatePicker, DateTimePicker, TimePicker } from "@mui/x-date-pickers";
import { Stack, TextField } from "@mui/material"
import React, { useState } from 'react'

const MuiPicker = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDateTime, setSelectedDateTime] = useState(null);

    console.log("Date: " + selectedDate);
    if (selectedTime) {
        console.log("Time: " + selectedTime.toLocaleTimeString());
    }
    console.log("Datetime: " + selectedDateTime);

    return (
        <Stack spacing={4} sx={{ width: "250px" }}>
            <DatePicker
                label="Date Picker"
                value={selectedDate}
                onChange={(value) => setSelectedDate(value)} />

            <TimePicker
                label="Time Picker"
                value={selectedTime}
                onChange={(value) => setSelectedTime(value)}
            />

            <DateTimePicker
                label="Datetime Picker"
                value={selectedDateTime}
                onChange={(value) => setSelectedDateTime(value)}
            />
        </Stack>
    )
}

export default MuiPicker