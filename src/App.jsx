// import React from 'react'
import { Box } from '@mui/material'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import { Navbar } from './components';
import { Home, About, Projects, Contact } from './pages';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Box sx={{ bgcolor: 'primary.', fontFamily: 'Gabarito' }}>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Box>
        </Router>

    )
}

export default App