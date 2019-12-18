import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = ({setIsCaptchaVerified}) => {
    
    const onChange = (value) => {
        if(!value){
            alert('Captcha Expired, Verify Again');
            setIsCaptchaVerified(() => false);
        }else
            setIsCaptchaVerified(() => true);
    }

    const onErrored = () => {
        setIsCaptchaVerified(() => false);
        alert('Something Went Wrong. Verify Again')
    }

    return (    
    <ReCAPTCHA
        size='compact'
        sitekey={process.env.REACT_APP_RECAPTCHA_CLIENT_ID}
        onChange={onChange}
        onErrored={onErrored}
    />
    )
}

export default ReCaptcha;