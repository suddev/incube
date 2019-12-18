import React, { useState } from 'react';
import ReCaptcha from '../Utility/RaCaptcha';

import OtpHandler from '../Utility/OtpHandler';
import { emailValidation, passwordValidation, rePasswordValidation, captchaValidation} from '../Validations';

const Register = ({setIsUserSignedIn, setUser, setRoute}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    const handleSubmit = () => {
        if(emailValidation(email) && passwordValidation(password, rePassword) && 
            rePasswordValidation(password, rePassword) && captchaValidation(isCaptchaVerified))
        {
            setIsOtpSent(true);
            fetch(`http://localhost:3001/api/email?email=${encodeURIComponent(email)}`,
            { method: 'POST' })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.status === 400)
                    console.log('ERROR ', resp.message);
                else {
                    console.log('EMAIL ', resp);
                    setOtp(resp.otp);
                }
            })
            .catch(err => console.log('ERROR1 ', err))
        }
    }

    const handleOtpSubmit = () => {
        //make a database call to store users information
        fetch(`http://localhost:3001/api/registration?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
        { method: 'POST' })
        .then(resp => resp.json())
        .then(user => {
          if(user.status === 400){
            console.log('Error ', user);
          } else {
            setUser({
                name: 'user',
                email: email,
                pic: 'user pic',
                id: 'user id'
            })
            setIsUserSignedIn('email');
          }
        })
        .catch(err => console.log('ERROR ', err))
    }

    return (
        isOtpSent
        ?   <OtpHandler myOtp={otp} onOtpSubmit={handleOtpSubmit} title='Enter Otp Sent to your Email Id' />
        :   <div className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center pa4 black-80 measure'>
                <h1>REGISTER</h1>
                <input
                    id="email"
                    className='ba b--transparent ph0 mh0 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                    placeholder='Enter Email Id'
                    type='text'
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    id="password"
                    className='ba b--transparent ph0 mh0 mv3 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                    placeholder='Enter Password'
                    type='password'
                    onChange={(event) => setPassword(event.target.value)}
                />
                <input
                    id="repassword"
                    className='ba b--transparent ph0 mh0 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                    placeholder='Re-type Password'
                    type='password'
                    onChange={(event) => setRePassword(event.target.value)}
                />
                <ReCaptcha id="captcha" setIsCaptchaVerified={setIsCaptchaVerified} />
                <button
                    id="submit"
                    className='b ph3 pv2 input-reset ba b--black bg-transparent mt2 grow pointer f6 dib'
                    onClick={handleSubmit}>REGISTER</button>
                <p onClick={() => setRoute('signin')} className='lh-copy mt3 b blue underline-hover f6 link grow black db pointer'>Already have an account. Sign In</p>
            </div>
    )
}

export default Register;