import React from 'react';
import Post from './post/Post';
import useStyles from './styles';

const Posts = ({data}) => {
  return (
    <div>
      {data?.length > 0 && data?.map((val) => (
        <Post data={val} />
      ))}  
    </div>
  )
}

export default Posts
