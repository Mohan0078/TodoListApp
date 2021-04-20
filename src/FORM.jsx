import React, { useState } from 'react';

const FORM = () => {

    const [text, setText] = useState('');

    // method for onChange event on text
    const textChange = (object1) => {
        console.log(object1.target.value);
        setText(object1.target.value);
    }
      
    const [newText, setNewText] = useState('');
    // when clicking the button 
    const setHeading = () => {
        setNewText(text);
    }

    return (
        <>
        <div>
            <h1>Hello {newText}</h1>
            <input type="text" placeholder="enter your name"
             onChange = {textChange}
             value={text}
            />
            <button onClick={setHeading}>Click me</button>
        </div>    
        </>
    );
};

export default FORM;