import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    budgieEgg: {
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
    budgieImg: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            width: '100%', display: 'block', margin: 'auto'
        },
        [theme.breakpoints.up('md')]: {
            width: '45%', display: 'block', margin: 'auto'
        },
        [theme.breakpoints.up('lg')]: {
            width: '35%', display: 'block', margin: 'auto'
        },
    }
}));

export default function MediaQuery() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.budgieEgg}>
                <h2>When budgie lays the first egg, Hatching time, Growing budgie chicks.</h2>
                <div>
                    <img src={process.env.PUBLIC_URL + "/Images/budgieMatingImg.jpg"} alt="image" className={classes.budgieImg} />
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;After a successful mating budgie lays the first egg after almost 10-12 days. During this period, she spends most of the time in the nest only. She hardly comes out of nest so male budgie feeds her.</p>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/Images/budgieEggsImg.jpg"} alt="image" className={classes.budgieImg} />
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;After laying the first egg budgie continue laying eggs every next day or alternate day. Normally budgie lays 5-7 eggs.</p>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/Images/firstEgg.jpg"} alt="image" className={classes.budgieImg} />
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;So how much time does it take to hatch an egg? Normally Egg hatches between 16 to 18 days, it may vary depending on different situations.</p>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/Images/chickGrowth.jpg"} alt="image" className={classes.budgieImg} />
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Budgie chicks grow very fast, just within 27 to 30 days they almost look like an adult and start eating by own. They also start to fly when they become a month old. </p>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/Images/grownChick.jpg"} alt="image" className={classes.budgieImg} />
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;This chick is 27 days old it's all feathers are grown  and it looks like an adult budgie. </p>
                </div>
                <Link to="/parrot-budgie-1" style={{ textDecoration: 'none', float: 'right' }}>
                    <Button variant="contained" color="primary">
                        BACK
                    </Button>
                </Link>
            </div>
        </div>
    );
}
