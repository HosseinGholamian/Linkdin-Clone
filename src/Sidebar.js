import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';
import "./Sidebar.css"
export default function Sidebar() {
    const user = useSelector(selectUser)

    function recentTopic(topic){
        return(
            <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
            </div>
        )
    }
    

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="image.jpg" alt="background" />
                <Avatar className="sidebar__avatar" sx={{ width: 56, height: 56 } }src={user.photoURL} >{user.displayName[0]}</Avatar>
                <div className="sidebar__info">
                    <h2>{user.displayName}</h2>
                    <h4>{user.email}</h4>
                </div>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>view per post</p>
                    <p className="stat__number">2.5k</p>
                </div>

                <div className="sidebar__stat">
                    <p>who visited you</p>
                    <p className="stat__number">105</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
            {recentTopic('ReactJs')}
            {recentTopic('front end full course')}
            {recentTopic('software engineer')}
            {recentTopic('learn backend by php')}
            {recentTopic('why nextJs win?')}
            {recentTopic('be one of ours')}
            </div>
        </div>
    )
}