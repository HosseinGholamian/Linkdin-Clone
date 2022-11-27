export default function InputOption(props) {
    return (
        <div className="inputOption" style={{ color: props.color }}>
            <props.Icon />
            <h4>{props.title}</h4>
        </div>

    )
}