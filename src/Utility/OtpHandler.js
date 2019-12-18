import React, { useState } from 'react';

const OtpHandler = ({myOtp, title, onOtpSubmit}) => {

    const [otp, setOtp] = useState('');

    const handleOtpSubmit = () => {
        if(otp == myOtp){
            onOtpSubmit();
            alert('Success')
        }else{
            alert('You have entered a wrong Otp. Try again !!!');
        }
    }

    return (
        <div style={{textAlign: 'center'}}>
            <input
                type='text'
                value={otp}
                onChange={(event) => setOtp(event.target.value)}
                placeholder={title}
            />
            <button onClick={handleOtpSubmit}>Enter Otp</button>
        </div>
    );
}

export default OtpHandler;