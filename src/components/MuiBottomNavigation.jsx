import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import React, { useState } from 'react'
import HomeIcon from "@mui/icons-material/Home"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PersonIcon from "@mui/icons-material/Person"
import HomePage from "../pages/HomePage"
import FavoritePage from "../pages/FavoritePage"
import ProfilePage from "../pages/ProfilePage"

const MuiBottomNavigation = () => {

    const [active, setActive] = useState(0);
    const [page, setPage] = useState("home");

    return (
        <>
            {
                active === 0 ? <HomePage /> : active === 1 ? <FavoritePage /> : <ProfilePage />
            }
            <BottomNavigation sx={{
                width: "100%",
                position: "absolute",
                bottom: 0,
            }}
                value={active}
                onChange={(e, newValue) => setActive(newValue)}
                showLabels>
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
            </BottomNavigation>
        </>
    )
}

export default MuiBottomNavigation