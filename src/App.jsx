// import React from 'react'
import { Box } from '@mui/material'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import { Land } from './pages';

const App = () => {
    return (
        <Router>
            <Box sx={{ bgcolor: 'primary.', fontFamily: 'Gabarito' }}>
                <Routes>
                    <Route path="/" element={<Land />} />
                </Routes>
            </Box>
        </Router>

    )
}

export default App