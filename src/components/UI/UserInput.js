import './UserInput.css'

const UserInput = (props) => {
    return <>
        <div className="input-wrapper">
            <input value={props.value} 
            type="text" 
            className='glass' 
            placeholder={props.placeholder}
            onChange={props.onChange}></input>
        </div>
    </>
}

export default UserInput