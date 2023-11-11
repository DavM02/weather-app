import './Button.css'

function Button(props) {
    return <>
        <button
            onClick={props.onClick}
            type={props.type}
            className="glass">
            {props.text}

        </button>
    </>
}

export default Button