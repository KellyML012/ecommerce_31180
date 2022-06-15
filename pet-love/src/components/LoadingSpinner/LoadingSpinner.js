import "./LoadingSpinner.css"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingSpinner = ( {display} ) => {
    return (
        <Box className="loading-spinner" sx={display}>
            <CircularProgress />
        </Box>
    )
}

export default LoadingSpinner