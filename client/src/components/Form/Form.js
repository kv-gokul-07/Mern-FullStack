import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import { createPosts } from '../../redux/actions/posts';
import useStyles from './styles';



const Form = () => {

  const [postData, setPostData] = useState({
    creater: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  });

  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPosts(postData));
  }

  const clear = () => {

  }
  
  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6' pb={2}>Creating a Memory</Typography>

        <TextField 
          style={{marginBottom: "20px"}}
          name="creator"
          variant='outlined'
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(event) => setPostData({...postData, creater: event.target.value})}
        />

        <TextField 
          style={{marginBottom: "20px"}}
          name="title"
          variant='outlined'
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(event) => setPostData({...postData, title: event.target.value})}
        />


        <TextField 
          style={{marginBottom: "20px"}}
          name="message"
          variant='outlined'
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(event) => setPostData({...postData, message: event.target.value})}
        />


        <TextField 
          style={{marginBottom: "20px"}}
          name="tag"
          variant='outlined'
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(event) => setPostData({...postData, tags: event.target.value})}
        />

      <div className={classes.fileInput}>
        <FileBase 
          type="file"
          multiple={true}
          onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
        />
      </div>

      <Button 
        className={classes.buttonSubmit} 
        style={{marginBottom: "10px"}}
        variant='contained' 
        color='primary' 
        size='large'
        type='submit'
        fullWidth
        >Submit</Button>

      <Button 
        className={classes.buttonSubmit} 
        variant='contained' 
        color='secondary' 
        size='small'
        onClick={clear}
        fullWidth
        >Clear</Button>
      </form>
    </Paper>
  )
}

export default Form
