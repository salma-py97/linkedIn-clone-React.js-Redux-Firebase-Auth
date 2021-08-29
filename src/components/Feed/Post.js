import { Avatar } from '@material-ui/core'
import './Post.css'
import InputOption from './InputOption';

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

// react-flip-move
import {forwardRef} from 'react'

const Post = forwardRef(({ name, description, message, photoURL, timestamp}, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__header">
        <Avatar src={photoURL}>{name[0]}</Avatar>
        <div className="post_info">
          <div>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>


        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} text='Like' color='gray' />
        <InputOption Icon={ChatOutlinedIcon} text='Comment' color='gray' />
        <InputOption Icon={ShareOutlinedIcon} text='Share' color='gray' />
        <InputOption Icon={SendOutlinedIcon} text='Send' color='gray' />
      </div>

    </div>
  )
})

export default Post
