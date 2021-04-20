import React, { useState } from 'react';

const SignupForm = () => {

    const [fullname, setFullName] = useState({
        name : "",
        password :  "",
        email : "",
        mobile : "",
    });

     // when clicking the button 
    const setHeading = (event) => {

        const name_ = event.target.name;
        const value = event.target.value
        
        // it can be written as
        // const {name,value} = event.target;

        setFullName((prev) => {
            // console.log(prev);
            if(name_ === 'name')
         {
                return {
               name : value,
               password : prev.password,
               email : prev.email,
               mobile : prev.mobile
            }
        }
        else   if(name_ === 'password')
        {
               return {
              name : prev.name,
              password : value,
              email : prev.email,
              mobile : prev.mobile
        }
    }
        else   if(name_ === 'mobile')
        {
               return {
              name : prev.name,
              password : prev.password,
              email : prev.email,
              mobile : value
        }
    }
        else   if(name_ === 'email')
        {
               return {
              name : prev.name,
              password : prev.password,
              email : value,
              mobile : prev.mobile
        }

       }
        
        } );
      }

    // when submitting
    const onSubmits = (event) => {
      event.preventDefault();
      alert("form submitted");
    }

    return (
        <>
        <div>
            <h1>Hello {fullname.name} {fullname.password} </h1>
            <p>{fullname.email}</p>
            <p>{fullname.mobile}</p>

            <form onSubmit={onSubmits}>
            <input type="text" placeholder="enter your name"
             name = "name"
             onChange = {setHeading}
             value={fullname.name}
            />
           
           <input type="text" placeholder="enter your password"
             name = "password"
             onChange = {setHeading}
             value={fullname.password}
            />

           <input type="email" placeholder="enter your email"
             name = "email"
             onChange = {setHeading}
             value={fullname.email}
            />

            <input type="number" placeholder="enter your mobile number"
             name = "mobile"
             onChange = {setHeading}
             value={fullname.mobile}
            />


            <br/>
            <button type="submit">Login</button>

           </form>
        </div>    
        </>
    );
};

export default SignupForm;