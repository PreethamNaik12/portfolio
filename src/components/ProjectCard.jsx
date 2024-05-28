import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function OverflowCard(props) {
    return (
        <Card 
            variant="outlined" 
            sx={{ width: 320, cursor:'pointer' }} 
            key ={props.key} 
            onClick={() => window.open(props.data.repo, '_blank')}
        >
            <CardOverflow>
                <AspectRatio ratio="2">
                    <img
                        src={props.data.image}
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Typography level="title-md"
                    onClick={() => window.open(props.data.live, '_blank')}
                    sx={{cursor:'pointer', color:'black', textDecoration:'none', fontWeight:'650', }}
                    >
                {props.data.title}{""}<ArrowOutwardIcon fontSize='sm' /></Typography>
                <Typography level="body-sm">{props.data.skills}</Typography>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                    <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                        {props.data.time}
                    </Typography>
                    <Divider orientation="vertical" />
                    <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                        {props.data.type}
                    </Typography>
                </CardContent>
            </CardOverflow>
        </Card>
    );
}
