import "./post.css"
import Avatar from '@mui/material/Avatar';
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { forwardRef } from "react";

const  Post = forwardRef((props , ref) =>  {

    return (
        <div ref={ref} className="post">

            {/* post header */}
            <div className="post__header">
                <Avatar src={props.image} >{props.name[0]}</Avatar>
                <div className="post__userInfo">
                    <h2>{props.name}</h2>
                    <p>{props.desctiption}</p>
                </div>
            </div>
            {/* post body */}
            <div className="post__body">
                <p>{props.message}</p>
            </div>

            {/* post buttons */}
            <div className="post__buttons">
                <InputOption
                    Icon={ThumbUpOffAltIcon}
                    title="Like"
                    color="gray"
                />
                <InputOption
                    Icon={CommentIcon}
                    title="Comment"
                    color="gray"
                />
                <InputOption
                    Icon={ShareIcon}
                    title="Share"
                    color="gray"
                />
                <InputOption
                    Icon={SendIcon}
                    title="Send"
                    color="gray"
                />
            </div>

        </div>
    )
})

export default Post;