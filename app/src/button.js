
function Buttons (props) {
    return (
        <h5
            className="col-md-2 col-12 text-center"
            onClick={() => props.handleClick(props.text)}
        >
            {props.text}
        </h5>
    );
}