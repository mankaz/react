import React from 'react';
import useStyles from "../layout/style";
const LeftSidebar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            left sidebar
        </div>
    );
};

export default LeftSidebar;