import Typography from '@mui/material/Typography'
import { Button } from '@mui/joy';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import EastIcon from '@mui/icons-material/ArrowCircleRightOutlined';
// import React from 'react';
const imageUrls = [
    'worker.png',
    'worker(1).png',
    'worker(2).png',
    'worker(3).png',
    'worker(4).png',
    'customer-service.png',
    'coffee-shop.png',
    // Add more image URLs as needed
];

const AboutMe = () => (
    <>
        <Typography variant="h1" color="initial">About Me</Typography>
        <Typography variant="p" color="initial">
        Embark on a journey through my path as a university student at NITK Surathkal. A self-taught web developer with an insatiable curiosity for machine learning, I bring a fusion of academic rigor and creative innovation to every project I undertake. With a dedication to continuous learning and a drive to explore the frontiers of technology, I thrive on pushing boundaries and exceeding expectations. Whether it's crafting captivating designs, diving deep into data science, or architecting cutting-edge solutions, I'm committed to making a meaningful impact through my work.
        </Typography>
    </>
)

const Land = () => {

    // State to manage the index of the currently displayed image
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to increment the current image index
    const incrementImageIndex = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    // Effect to update the image index at a specified interval
    useEffect(() => {
        const intervalId = setInterval(incrementImageIndex, 3000); // Change 3000 to the desired interval in milliseconds
        return () => clearInterval(intervalId); // Cleanup function to clear the interval on component unmount
    }, []);

    // State to manage the image displayed on hover
    const [isHovering, setIsHovering] = useState(false);

    return (
        <>
            <Box sx={{
                height:'100vh',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',
            }}>
                <Typography variant="h2" sx={{textAlign: 'center', fontFamily:'Gabarito', fontWeight:700}}>
                    Welcome to Preetham's Portfolio
                </Typography>
                <Typography variant="h5" sx={{textAlign: 'center', fontFamily:'Gabarito', mt:2}}>
                    Hey there! I'm Preetham,<br/> a programming enthusiast weaving digital wonders.
                </Typography>
            
                <Box sx={{display:'flex', mt:2}}>
                    {/* <Button variant="solid">Solid</Button> */}
                    <Button variant="solid"  sx={{mr:3}}>My Projects</Button>
                    <Button variant="plain" endDecorator={<EastIcon/>}>About Me</Button>
                    {/* <Button variant="plain">Plain</Button> */}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <img
                        src={isHovering ? 'work-from-home.png': imageUrls[currentImageIndex]}
                        alt={`Image ${currentImageIndex}`}
                        style={{ width: '220px', marginTop: '2em' }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <AboutMe/>
            </Box>
        </>
    );
};

export default Land;