import React from "react";
/* parent to child 
function Login(props){
    return (
    <h1>Hello {props.name}!!</h1>
    );
}
*/

function Login({callback}){
    const data = 1234;
    return (
        <button onClick = {()=> callback(data)}>
            pass data from parent component
        </button>
    )
}
export default Login