import Typography from '@mui/material/Typography'
import { Button, Card, CardContent, Container } from '@mui/joy';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import EastIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import AutoAwesomeIcon from '@mui/icons-material/SettingsSuggest';
import {animateScroll as scroll} from 'react-scroll';
import { socialIcons, imageUrls, projects} from '../constants';


const AboutMe = () => (
    <Box sx={{display:'flex', my:2}}>
        <Box sx={{mx:5 }}>
            <Typography variant="h2" color="initial" sx={{fontWeight:'600',fontFamily:'Gabarito'}}>About Me</Typography>
            <Typography variant="h6" color="initial" sx={{mr:5, mt:5, textAlign:'justify'}}>
            Embark on a journey through my path as a university student at NITK Surathkal. A self-taught web developer with an insatiable curiosity for machine learning, I bring a fusion of academic rigor and creative innovation to every project I undertake. With a dedication to continuous learning and a drive to explore the frontiers of technology, I thrive on pushing boundaries and exceeding expectations. Whether it's crafting captivating designs, diving deep into data science, or architecting cutting-edge solutions, I'm committed to making a meaningful impact through my work.
            </Typography>
        </Box>
        <img src="/profile-pic.png" alt="" style={{width:'400px', borderRadius:'10px', mx:2}} />
    </Box>
)

const MyWork = () => (
    <Box sx={{backgroundColor:'#f0f0f0', minHeight:'50vh', maxWidth:'75%', borderRadius:'13px', mb:4}}>
        <Button disabled variant="plain" size='lg' startDecorator={<AutoAwesomeIcon color="primary" sx={{fontSize:'50px'}} />} sx={{m:1}} />
        {projects.map((value, index) => (
            <Card variant="outlined" sx={{mx:3, my:2}} key={index}>
                <CardContent>
                    <Typography level="h5"  sx={{fontSize:'20px', fontWeight:600}}>{value.title}</Typography>
                    <Typography>
                        {value.description}
                    </Typography>
                    <Box sx={{mt:1}}>
                        <Button variant='soft' onClick={() => window.open(value.repo, '_blank')} sx={{mr:1}}>Source Code</Button>
                        <Button sx={{mr:1}} onClick={() => window.open(value.link, '_blank')}>Visit</Button>
                    </Box>
                </CardContent>
            </Card>
        ))}
    </Box>
)

const Contact = () => (
    <Box sx={{my:5}}>
        {socialIcons.map((value, index) => (
            <img
                key={index}
                src={value.link}
                alt={value.alt}
                onClick={() => window.open(value.href, '_blank')}
                onMouseEnter={(e) => e.target.style.cursor = 'pointer'}
                style={{
                    width: '100px',
                    borderRadius: '10px',
                    marginLeft: '28px',
                    marginRight: '28px'
                }}
            />
        ))}
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

    // Scroll functions
    const scrollToBottom = () => {
        scroll.scrollTo(600);
    }
    const scrollToAbout = () => {
        scroll.scrollTo(1100);
    }
    const scrollABit = () => {
        scroll.scrollTo(200);
    }
    const ScrollToTop = () => {
        scroll.scrollToTop();
    }

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
                </Typography>
            
                <Box sx={{display:'flex', mt:2}}>
                    {/* <Button variant="solid">Solid</Button> */}
                    <Button variant="solid"  sx={{mr:3}} onClick={scrollToAbout} >My Projects</Button>
                    <Button variant="plain" endDecorator={<EastIcon/>} onClick={scrollToBottom}>About Me</Button>
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
                <img src='/scroll-bar.png' onClick={scrollABit} style={{width:'40px'}}/>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <AboutMe/>
            </Box>

            <Typography variant="h2" color="initial" sx={{fontWeight:'600',fontFamily:'Gabarito', textAlign:'left', ml:5}}>Projects</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <MyWork/>
            </Box>

            <Typography variant="h2" color="initial" sx={{fontWeight:'600',fontFamily:'Gabarito', textAlign:'center', ml:5}}>Let's Connect</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Contact/>
            </Box>

            <Button variant="soft" onClick={ScrollToTop} sx={{float:'right', mb:1}}>Back to Top</Button>
        </Container>
    );
};

export default Land;