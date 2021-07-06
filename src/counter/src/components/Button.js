const Button = (props) =>{
    return <button onClick={props.clickHandler}>
        click here to increment by {props.incValue}
    </button>;   
}

export default Button;