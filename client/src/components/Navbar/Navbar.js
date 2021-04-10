import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Typography, Toolbar, Button } from '@material-ui/core';
import useStyles from './styles'
import memorabilia from '../../images/memorabilia.jpeg';

const Navbar = () => {
    const classes = useStyles();
    const user = null;
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography /* component={Link} to='/' */ className={classes.heading}  variant="h2" align="center">Melancholia</Typography>
                <img className={classes.image} src={memorabilia} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} 
                        src={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h5">
                            {user.result.name}
                        </Typography>
                        <Button variant='contained' className={classes.logout}></Button>
                    </div>
                ) : (
                    <div>

                    </div>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
