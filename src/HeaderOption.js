import "./HeaderOption.css"
import Avatar from '@mui/material/Avatar';
export default function HeaderOption(props) {
    return (
        <div className="headerOption" onClick={props.onClick}>
            {props.Icon && <props.Icon className="headerOption__icon" />}
            {props.avatar && <Avatar
                alt="avatar image"
                src={props.avatar}
                
            >{props.name[0]}</Avatar>}
            <h3 className="headerOption__title">{props.title}</h3>
        </div>

    )
}