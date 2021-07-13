import React, { useState } from 'react';

const User = props => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[usernameError, setuserNameError] = useState ("");
    const[emailError, setEmailError] = useState ("");
    const[passwordError, setPasswordError] = useState ("");
    const[hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password};
        if(e.target.value.length < 1){
            setuserNameError("User Name required!");
        } else if(e.target.value.length < 4){
            setuserNameError("User Name must be at least 4 characters!")
        }
        if(e.target.value.length < 1){
            setEmailError("Email required!");
        } else if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters!")
        }
        if(e.target.value.length < 1){
            setPasswordError("Password required!");
        } else if(e.target.value.length < 6){
            setPasswordError("Password at least 6 characters!")
        }
        setHasBeenSubmitted(true);
    };

    const formConfirm = () => {
        if( hasBeenSubmitted) {
            return "form submitted";
        } else{
            return "Please submit the form"
        }
    };

    return(
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>Username: </label>
                <input type="text" onChange={ createUser } />
                { 
                    usernameError ?
                    <p style={{color:'red'}}>{ usernameError }</p> : <h1>Whoops</h1>
                }

            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ createUser } /> 
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> : <h1>Whoops</h1>
                }
            </div>
            <div>
                <label>Password: </label>
                <input  type="text" onChange={ createUser } />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> : <h1>whoops</h1>
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
}

export default User;