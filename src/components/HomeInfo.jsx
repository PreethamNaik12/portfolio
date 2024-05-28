import { Card, CardContent } from '@mui/joy';
import { Button, CardActions, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

// eslint-disable-next-line 
const InfoBox = ({ text, link, btnText }) => {
    return (
        <Card variant='solid' color='primary' sx={{ width: { xs: '90%', sm: '40%', md: '30%' }, bgcolor: 'primary.main', position: 'fixed', top: '28%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
            <CardContent>
                <Typography variant='subtitle' sx={{ color: 'white' }}>{text}</Typography>
            </CardContent>
            <CardActions>
                <Link to={link} style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', textDecoration: 'none', fontFamily: 'inherit' }}>
                    <Button size='small' variant='outlined' sx={{
                        backgroundColor: 'primary.contrastText', color: 'primary.main',
                        '&:hover': {
                            color: '#ffffff'
                        }
                    }}>
                        {btnText}
                    </Button>
                </Link>
            </CardActions>
        </Card >
    )
}

const renderContent = {
    1: (
        <Card variant='solid' color="primary" sx={{ width: { xs: '90%', sm: '40%', md: '50%' }, bgcolor: 'primary.main', position: 'fixed', top: '16%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' }}>
            <CardContent sx={{display:'flex', flexDirection:'column', alignItems:'center', }}>
                <Typography gutterBottom variant="h4" sx={{ color: 'primary.contrastText'}}>
                    Welcome to the world of 3D portfolios👋
                </Typography>
                <Typography variant="body2" sx={{ color: 'primary.contrastText' }}>
                    Have glimpse of my journey as a developer here🚀
                </Typography>
            </CardContent>
        </Card>
    ),
    2: <InfoBox
        text='I have worked on a variety of projects, leveraging different technologies⚙️.'
        link='/about'
        btnText='About Me'
    />,
    3: <InfoBox
        text='Worked in multiple projects, want to see them?👀'
        link='/projects'
        btnText='View Projects'
    />,
    4: <InfoBox
        text="Need a project and looking for a dev? I'm  just a few keystrokes away!"
        link='/contact'
        btnText="Let's Talk"
    />
};


// eslint-disable-next-line react/prop-types
const HomeInfo = ({ currentStage }) => {

    return renderContent[currentStage] || null
    // (


    // );
}

export default HomeInfo