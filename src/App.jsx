import { LocalizationProvider } from "@mui/x-date-pickers"
import './App.css'
import MuiAccordion from "./components/MuiAccordion"
import MuiAlert from "./components/MuiAlert"
import MuiAutocomplete from "./components/MuiAutocomplete"
import MuiAvatar from "./components/MuiAvatar"
import MuiBadge from "./components/MuiBadge"
import MuiBottomNavigation from "./components/MuiBottomNavigation"
import MuiBreadcrumbs from "./components/MuiBreadcrumbs"
import MuiButton from "./components/MuiButton"
import MuiCard from "./components/MuiCard"
import MuiCheckbox from "./components/MuiCheckbox"
import MuiChip from "./components/MuiChip"
import MuiDialog from "./components/MuiDialog"
import MuiDrawer from "./components/MuiDrawer"
import MuiImageList from "./components/MuiImageList"
import MuiLayout from "./components/MuiLayout"
import MuiLink from "./components/MuiLink"
import MuiList from "./components/MuiList"
import MuiLoadingButton from "./components/MuiLoadingButton"
import MuiNavbar from "./components/MuiNavbar"
import MuiProgress from "./components/MuiProgress"
import MuiRadioButton from "./components/MuiRadioButton"
import MuiRating from "./components/MuiRating"
import MuiSelect from "./components/MuiSelect"
import MuiSkeleton from "./components/MuiSkeleton"
import MuiSnackbar from "./components/MuiSnackbar"
import MuiSpeedDial from "./components/MuiSpeedDial"
import MuiSwitch from "./components/MuiSwitch"
import MuiTable from "./components/MuiTable"
import MuiTextField from "./components/MuiTextField"
import MuiTooltip from "./components/MuiTooltip"
import MuiTypography from "./components/MuiTypography"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import MuiPicker from "./components/MuiPicker"
import MuiTabs from "./components/MuiTabs"
import MuiTimeline from "./components/MuiTimeline"
import MuiMasonry from "./components/MuiMasonry"
import MuiResponsiveness from "./components/MuiResponsiveness"
import { createTheme, colors, ThemeProvider } from "@mui/material"

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700]
    }
  }
});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {/* <MuiTypography /> */}
          {/* <MuiButton /> */}
          {/* <MuiTextField /> */}
          {/* <MuiSelect /> */}
          {/* <MuiRadioButton /> */}
          {/* <MuiCheckbox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutocomplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiLink /> */}
          {/* <MuiBreadcrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiBottomNavigation /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackbar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiProgress /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiPicker /> */}
          {/* <MuiTabs /> */}
          {/* <MuiTimeline /> */}
          {/* <MuiMasonry /> */}
          <MuiResponsiveness />
        </LocalizationProvider>
      </ThemeProvider>
    </>
  )
}

export default App
