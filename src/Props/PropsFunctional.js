function PropsFunctional(props) 
{
    //or can be passed in the place of props and accesed with {example}
    return(
        <div>
            <h1>My name is {props.name}</h1>
            <h1>My age is {props.age}</h1>
        </div>
    )
}

export default PropsFunctional;