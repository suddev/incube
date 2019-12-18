import React, { useState } from 'react';
import { emailValidation, passwordValidation} from '../Validations';

const SignIn = ({setIsUserSignedIn, setUser, setRoute}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const verifyUserInfo = () => {
        fetch(`http://localhost:3001/api/signin?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
        { method: 'POST' })
        .then(resp => resp.json())
        .then(user => {
          if(user.status === 400){
            console.log('Error ', user);
          } else {
            setUser({
              name: user.name,
              email: user.email,
              pic: user.pic,
              id: user.id
            })
            setIsUserSignedIn('email');
          }
        })
        .catch(err => console.log('ERROR ', err))
    } // Make a node call to fetch user details from database

    const handleSubmit = () => {
        if(emailValidation(email) && passwordValidation(password)){
            verifyUserInfo();
        }
    }

    return (
        <div style={{textAlign: 'center'}}>
            <div className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center pa4 black-80 measure'>
                <h1>SIGN UP</h1>
                <input
                    className='ba b--transparent ph0 mh0 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                    placeholder='Enter Email Id'
                    type='email'
                    id="email"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    className='ba b--transparent ph0 mh0 mv3 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                    placeholder='Enter Password'
                    type='password'
                    id="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button 
                    id="submit"
                    className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                    onClick={handleSubmit} >SIGN IN</button>
                <p onClick={() => setRoute('register')} className='lh-copy b blue mt3 underline-hover f6 link grow black db pointer'>New User? Create a account</p>
            </div>
        </div>
    )
}

export default SignIn;