import Typography from '@mui/material/Typography'
import { Box, Button, ButtonGroup, Container } from '@mui/joy';
import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ProjectCard } from '../components';
// icons
import EastIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import AutoAwesomeIcon from '@mui/icons-material/SettingsSuggest';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
// Data
import { socialIcons, imageUrls, langs, frameworks, tools } from '../constants';
import projects from '../projectsData';

//Footer
const AboutMe = () => (
    <Box sx={{display: 'flex', flexDirection:{xs:'column', md:'row'}, my: 2, p: 2, borderRadius: '12px', minWidth: '95%'}}>
        <Box sx={{ width: {xs: '100%', md:'25%'}, display: 'grid', placeItems: 'center' }}>
            <img src="/profile-pic.png" alt="" style={{ width: '130px', borderRadius: '10px', mx: 2 }} />
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: '600' }} color="initial">Preetham Naik</Typography>
        </Box>
        <Box sx={{ mx: {xs:0, md:5}, mt:{xs:4, md:0}, width: {xs:'100%',md:'75%'} }}>
            <Box sx={{display:'flex', justifyContent:{xs:'center', md:'right'}, alignItems:'center', minHeight:'100%' }}>
                {socialIcons.map((value, index) => (
                    <img
                        key={index}
                        src={value.link}
                        alt={value.alt}
                        onClick={() => window.open(value.href, '_blank')}
                        onMouseEnter={(e) => e.target.style.cursor = 'pointer'}
                        style={{
                            width: '45px',
                            marginLeft: '1em',
                            marginRight: '1em'
                        }}
                    />
                ))}
            </Box>
        </Box>
    </Box>
)

//Projects
const MyWork = () => (
    <Box sx={{ backgroundColor: '#f0f0f0', minHeight: '50vh', maxWidth: '90%', borderRadius: '13px', mb: 4, px:{xs:3, md:0}, pb:2}}>
        <Button disabled variant="plain" size='lg' startDecorator={<AutoAwesomeIcon color="primary" sx={{ fontSize: '50px', display:{xs:'none', md:'flex'} }} />} sx={{ m: 1 }} />
        <Box sx={{display:'flex', gap:'30px',justifyContent:'center', flexWrap:'wrap'}}>
            {projects.map((value, index) => (
                <ProjectCard data= {value} key={index}/>
            ))}
        </Box>
    </Box>
)

//Skills
const Content = (props)=> (
    <>
        <Button disabled variant="plain" size='sm' startDecorator={props.icon} sx={{ m: 1 }}>
            <Typography variant="subtitle" color="initial" sx={{display:{xs:'none', md:'flex'}}}>{props.label}</Typography>
        </Button>
        <Box sx={{ mx: 5, my: 2,display:'flex', gap:'50px',justifyContent:'center', flexWrap:'wrap' }}>
            {props.data.map((value, index) => (
                <Box key={index} sx={{display:'grid', placeItems:'center'}}>
                    <img src={value[0]} alt={index} style={{width:'30px', marginBottom:'5px'}} />
                    <small style={{cursor:'default'}}>{value[1]}</small>
                </Box>
            ))}
        </Box>
    </>
)
const MySkills = () => (
    <Box sx={{display:'flex', justifyContent:'center', gap:'30px', maxWidth:'95%'}}>
        <Box sx={{ backgroundColor: '#f0f0f0', minHeight: '37vh', maxWidth: '25vw', borderRadius: '10px', mb: 4 }}>
            <Content data = {langs} label={'Langauges'} icon={<CodeIcon color="primary" sx={{ fontSize: '30px' }} />}/>
        </Box>
        <Box sx={{ backgroundColor: '#f0f0f0', minHeight: '37vh', maxWidth: '25vw', borderRadius: '10px', mb: 4 }}>
            <Content data = {frameworks} label={'Frameworks/Libraries'} icon={<IntegrationInstructionsIcon color="primary" sx={{ fontSize: '25px' }} />}/>
        </Box>
        <Box sx={{ backgroundColor: '#f0f0f0', minHeight: '37vh', maxWidth: '25vw', borderRadius: '10px', mb: 4 }}>
            <Content data = {tools} label={'Developer Tools'} icon={<BuildIcon color="primary" sx={{ fontSize: '25px' }} />}/>
        </Box>
    </Box>
)

//Landing Page Main Component
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
        scroll.scrollToBottom({duration:2000});
    }
    const scrollToProjects = () => {
        scroll.scrollTo(document.getElementById('projects').offsetTop, {
            duration: 2000, // Adjust the duration as needed
            smooth: 'easeInOutQuad', // You can choose a different easing function
        });
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
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
                <Typography variant="h2" sx={{ textAlign: 'center', fontFamily: 'Gabarito', fontWeight: 700, mt:3 }}>
                    Welcome to Preetham's Portfolio
                </Typography>
                <Typography variant="h5" sx={{ textAlign: 'center', fontFamily: 'Gabarito', mt: 2 }}>
                    Hey there! I'm Preetham,<br /> a programmer turning code into captivating experiences.
                </Typography>

                <Box sx={{ display: 'flex', mt: 2 }}>
                    {/* <Button variant="solid">Solid</Button> */}
                    <Button variant="solid" sx={{ mr: 3 }} onClick={scrollToProjects} >My Projects</Button>
                    <Button variant="plain" endDecorator={<EastIcon />} onClick={scrollToBottom}>Connect</Button>
                    {/* <Button variant="plain">Plain</Button> */}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0, marginBottom: '3em' }}>
                    <img
                        src={isHovering ? 'work-from-home.png' : imageUrls[currentImageIndex]}
                        alt={`Image ${currentImageIndex}`}
                        style={{ width: '220px', marginTop: '2em' }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    />
                </Box>
                <img src='/scroll-bar.png' onClick={scrollABit} style={{ width: '40px' }} />
            </Box>

            {/* skills */}
            <Typography variant="h3" color="initial" sx={{ fontWeight: '600', fontFamily: 'Gabarito', textAlign: 'center', mb:5, mt: 7 }}>Skills</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, flexWrap:'wrap' }}>
                <MySkills />
            </Box>
            
            {/* Projects */}
            <Typography variant="h3" color="initial" sx={{ fontWeight: '600', fontFamily: 'Gabarito', textAlign: 'center', mt: 7, mb:5}} id='projects'>Projects</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <MyWork />
            </Box>

            {/* Lets Connect */}
            <Typography variant="h3" color="initial" sx={{ fontWeight: '600', fontFamily: 'Gabarito', textAlign: 'center', mt:5}}>Let's Connect</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0 }}>
                <AboutMe />
            </Box>

            {/* Bottom button group */}
            <ButtonGroup aria-label="outlined button group" sx={{ float: 'right', mb: 1 }}>
                <Button onClick={()=> {window.open('/resume.pdf', '_blank')}}>Resume</Button>
                <Button onClick={()=> {window.open('https://github.com/PreethamNaik12/portfolio', '_blank')}}>Repo</Button>
                <Button onClick={ScrollToTop}>Back to Top</Button>
            </ButtonGroup>
        </Container>
    );
};

export default Land;