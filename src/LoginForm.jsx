import React, { useState } from 'react';

const LoginForm = () => {

    const [text, setText] = useState('');


    // method for onChange event on text
    const textChange = (object1) => {
        console.log(object1.target.value);
        setText(object1.target.value);
    }

    // onChange event on second field
    const [newPass, setNewPassText] = useState();
    const passChange = (object2) => {
        setNewPassText(object2.target.value);
    }
      
    const [newText, setNewText] = useState('');
    const [textPass, setTextPass] = useState('');

    // when clicking the button 
    const setHeading = (event) => {
        // for preventing the reloading of browser
          event.preventDefault();
          setNewText(text);
          setTextPass(newPass);
    }

    return (
        <>
        <div>
            <h1>Hello {newText} {textPass}</h1>
            <form onSubmit={setHeading}>
            <input type="text" placeholder="enter your name"
             onChange = {textChange}
             value={text}
            />
           
           <input type="text" placeholder="enter your password"
             onChange = {passChange}
             value={newPass}
            />

            <br/>
            <button type="submit">Login</button>

           </form>
        </div>    
        </>
    );
};

export default LoginForm;