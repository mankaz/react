import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
       display:'flex',
        height:'120vh',
        width:'100%',
        overflow:'hidden'
    },
    rightSidebar : {
        backgroundColor:'#fgbghh',
        width : '18%',
    },
    leftSidebar : {
        backgroundColor:'#ffvgkk',
        width : '25%'
    },
    mainPart : {
      backgroundColor:'#gghtgv',
      flex:1
    },
    divider : {
        backgroundColor:'lightblue',
        height: '100%',
        width: '2'
    }
});

export default useStyles;