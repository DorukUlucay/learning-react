const UserInput = (props) =>{

    const txtChanged = (event)=>{
        props.incrementValueChangeHandler(parseInt(event.target.value));
    }

    return <input type="number" onChange={txtChanged}/>;    
}

export default UserInput;