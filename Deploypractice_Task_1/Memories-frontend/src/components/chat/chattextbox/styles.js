import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    sendBtn: {
        color: 'blue',
        cursor: 'pointer',
        '&:hover': {
            color: 'gray'
        }
    },

    chatTextBoxContainer: {
        position: 'absolute',
        bottom: '15px',
        left: '315px',
        boxSizing: 'border-box',
        overflow: 'auto',
        width: 'calc(100% - 300px - 50px)',
    },

    chatTextBox: {
        width: 'calc(100% - 25px)',
    }

}))