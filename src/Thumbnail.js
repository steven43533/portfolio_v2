import React from 'react'; // Import the Component component from React
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Thumbnail(props) {
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                alt="project "
                height="100"
                image={props.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={props.GitHubRepo}>Repo</Button>
                <Button size="small" href={props.link}>Live Site</Button>
            </CardActions>
        </Card>
    );
}

export default Thumbnail;