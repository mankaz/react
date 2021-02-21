import React from 'react';
import useStyles from "../layout/style";

const MainPart = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            main sidebar
        </div>
    );
};

export default MainPart;