import React from 'react';
import {Box, Grid, Typography} from "@material-ui/core";
import useStyles from "./style";

const RightSidebar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center">
                <Grid item>
                    <img src={'img/logo.png'} className={classes.logo}/>
                </Grid>
                <Grid item>
                    <Typography className={classes.title}>
                        توئیتر
                    </Typography>
                </Grid>
                <Typography color={"red"} align={"center"} className={classes.hashtagTitle}>
                    داغ ترین هشتک ها

                </Typography>
                <Grid container direction={"column"} alignItems={"center"}>
                    <Grid item>
                        <img src={'img/logo.png'} className={classes.logo}/>
                        <Typography className={classes.childHashtag}>
                            پرچم_دار_جدید
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default RightSidebar;