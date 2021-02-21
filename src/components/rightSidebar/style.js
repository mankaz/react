import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor:'white',
        width : '50%',
        textAlign: 'center'
    },
    logo : {
        width : '10%',
        height : '10%',
        marginTop: '5px'
    },
    title : {
        fontSize : '1.25rem !important'
    },
    hashtagTitle : {
        fontSize : '1.5rem !important',
    },
    childHashtag: {
        fontSize : '1rem !important',
    }

});

export default useStyles;