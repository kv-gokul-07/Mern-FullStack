import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        // margin: theme.spacing(1),
      },
    },
    paper: {
      padding: '20px',
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    fileInput: {
      width: '97%',
      margin: '20px 0',
    },
    buttonSubmit: {
      marginBottom: 10,
    },
  }));