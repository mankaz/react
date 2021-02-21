import React from "react";
import useStyles from "./style";
import {Divider, Typography} from "@material-ui/core";
import RightSidebar from "../rightSidebar/RightSidebar";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import MainPart from "../MainPart/MainPart";

const Layout = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <MainPart/>
            <LeftSidebar/>
            <Divider orientation={'vertical'} className={classes.divider}/>
            <RightSidebar/>
        </div>
    )
}

export default Layout;