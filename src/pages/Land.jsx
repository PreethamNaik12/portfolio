import Typography from '@mui/material/Typography'
import { Button, Card, CardContent, Container } from '@mui/joy';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import EastIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import AutoAwesomeIcon from '@mui/icons-material/SettingsSuggest';
import GitHubIcon from '@mui/icons-material/GitHub';
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
    <Box sx={{display:'flex', my:2}}>
        <Box sx={{mx:5 }}>
            <Typography variant="h2" color="initial" sx={{fontWeight:'600',fontFamily:'Gabarito'}}>About Me</Typography>
            <Typography variant="h6" color="initial" sx={{mr:5, mt:5, textAlign:'justify'}}>
            Embark on a journey through my path as a university student at NITK Surathkal. A self-taught web developer with an insatiable curiosity for machine learning, I bring a fusion of academic rigor and creative innovation to every project I undertake. With a dedication to continuous learning and a drive to explore the frontiers of technology, I thrive on pushing boundaries and exceeding expectations. Whether it's crafting captivating designs, diving deep into data science, or architecting cutting-edge solutions, I'm committed to making a meaningful impact through my work.
            </Typography>
        </Box>
        <img src="/jake-nackos-Ga7aBzN7qDw-unsplash.jpg" alt="" style={{width:'400px', borderRadius:'10px', mx:2}} />
    </Box>
)
const MyWork = () => (
    <Box sx={{backgroundColor:'#f0f0f0', minHeight:'50vh', maxWidth:'75%', borderRadius:'13px', mb:4}}>
        <Button disabled variant="plain" size='lg' startDecorator={<AutoAwesomeIcon color="primary" sx={{fontSize:'50px'}} />} sx={{m:1}} />
        <Card variant="outlined" sx={{mx:3, my:2}}>
            <CardContent>
                <Typography level="h5"  sx={{fontSize:'20px', fontWeight:600}}>Project 1</Typography>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis consequatur dignissimos, laboriosam alias, accusamus impedit, sint ut deleniti quis quae atque. Sequi, in explicabo. Cupiditate corporis ipsum iusto magnam accusamus.
                </Typography>
                <Box sx={{mt:1}}>
                    <Button variant='soft' sx={{mr:1}}>Button</Button>
                    <Button sx={{mr:1}}>Button</Button>
                </Box>
            </CardContent>
        </Card>
        <Card variant="outlined" sx={{mx:3, my:2}}>
            <CardContent>
                <Typography level="h5"  sx={{fontSize:'20px', fontWeight:600}}>Project 1</Typography>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis consequatur dignissimos, laboriosam alias, accusamus impedit, sint ut deleniti quis quae atque. Sequi, in explicabo. Cupiditate corporis ipsum iusto magnam accusamus.
                </Typography>
                <Box sx={{mt:1}}>
                    <Button variant='soft' sx={{mr:1}}>Button</Button>
                    <Button sx={{mr:1}}>Button</Button>
                </Box>
            </CardContent>
        </Card>
    </Box>
)

const Contact = () => (
    <Box>
        <Typography variant="h2" color="initial" sx={{fontWeight:'600',fontFamily:'Gabarito'}}>Get in Touch</Typography>
        <Box sx={{display:'flex',flexDirection:'column' , justifyContent:'center', mt:2}}>
            <Button variant='soft' startDecorator={<GitHubIcon/>} size='lg' sx={{m:2}}>GitHub</Button>
            <Button variant='soft' startDecorator={<GitHubIcon/>} size='lg' sx={{m:2}}>LinkedIn</Button>
            <Button variant='soft' startDecorator={<GitHubIcon/>} size='lg' sx={{m:2}}>Mail</Button>
        </Box>
    </Box>
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
        <Container maxWidth='xl'>
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
                </Typography>Typ
            
                <Box sx={{display:'flex', mt:2}}>
                    {/* <Button variant="solid">Solid</Button> */}
                    <Button variant="solid"  sx={{mr:3}}>My Projects</Button>
                    <Button variant="plain" endDecorator={<EastIcon/>}>About Me</Button>
                    {/* <Button variant="plain">Plain</Button> */}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, marginBottom:'3em' }}>
                    <img
                        src={isHovering ? 'work-from-home.png': imageUrls[currentImageIndex]}
                        alt={`Image ${currentImageIndex}`}
                        style={{ width: '220px', marginTop: '2em' }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    />
                </Box>
                <img src='/scroll-bar.png' style={{width:'40px'}}/>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <AboutMe/>
            </Box>

            <Typography variant="h2" color="initial" sx={{fontWeight:'600',fontFamily:'Gabarito', textAlign:'left', ml:5}}>Projects</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <MyWork/>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Contact/>
            </Box>
        </Container>
    );
};

export default Land;