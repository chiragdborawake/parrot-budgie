import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            width: '85%', textAlign: 'justify', margin: 'auto', fontSize: 18
        },
        [theme.breakpoints.up('md')]: {
            width: '60%', textAlign: 'justify', margin: 'auto', fontSize: 20
        },
        [theme.breakpoints.up('lg')]: {
            width: '50%', textAlign: 'justify', margin: 'auto', fontSize: 22
        },
    },
}));

export default function MediaQuery() {
    const classes = useStyles();
    return (
        <div>

            <div className={classes.root}>
                <h2>Parrots are popular birds, but it's not good for them.</h2>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Parrots are the one of the most popular species among birds. One of the main reason they are famous is that they mimic what you speak. Besides mimicry they are also very intelligent and beautiful. There are roughly more than 350 species of parrot in world. From these species Indian Ring Neck, Macaws, Amazons, African Grey, Lorikeets, Lovebirds, Budgie,Cockatiel and Cockatoo are very famous.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Humans are keeping these parrot as pet since long time. These parrots become social easily, after spending few days with them and then they love to play with you. If you teach them, then they also follow your commands. </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Now many of you thinking why do we need to keep parrots as pet and give them commands if it can fly and live its own life. Yes keeping any parrot or any bird in cage is wrong. If I speak specific about India many people keeps parrot in tiny cage they hardly give attention to them.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Even I have one Indian ring neck parrot. But there is reason behind why I am keeping parrot. I found my parrot when it was only 2-3 days old since then I am taking care of it. When I found this parrot I decided to keep it till it start to fly and after that I will leave it. As I decided I feed it for few months. During these days I used to take it out of cage it was flying inside home playing with me and my family it become our family member.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;As I decided I was thinking about releasing it. But one think I get to know that if I leave it outside then it will not be able to find food and will not be able to protect from other birds specially crows it will die for sure. Because my parrot don't know where to find food I am the one who giving it food and protecting it. And my parrot also don't know that humans also can hurt it. It may happen that my parrot will go closer to any human after I release it out side. So I decided that I will keep it with my self. Besides this parrot I found two injured wild parrots I took care of them and ones  they become healthy I released them.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;What I am trying to say that you can keep any bird with you if it will not be able to live life by own. But make sure that you will give them big cage proper food and time.</p>
                <Link to="/" style={{ textDecoration: 'none', float: 'right' }}>
                    <Button variant="contained" color="primary">
                        BACK
                    </Button>
                </Link>
            </div>
        </div>
    );
}
