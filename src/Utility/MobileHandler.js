import React, { useState, useEffect } from 'react';
import OtpHandler from './OtpHandler';
import VerifyDevice from './VerifyDevice';
import { mobileValidation } from '../Validations';

const MobileHandler = ({user, handleLogout}) => {

    const [mobile, setMobile] = useState('');
    const [isMobileVerifyButtonClicked, setIsMobileVerifyButtonClicked] = useState('');
    const [myOtp, setMyOtp] = useState('');
    const [isMobileverified, setIsMobileVerified] = useState(false);

    // make a node call to check in database if the user's mobile is verified
    useEffect(() => {
        console.log('HI')
        console.log('USER ',user)
        fetch(`http://localhost:3001/api/mobileverification?id=${encodeURIComponent(user.id)}`,
            { method: 'POST' })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.message === 'user is not verified'){
                    console.log('ERROR ', resp);
                    setIsMobileVerified(false);
                }
                else {
                    console.log('User ', resp);
                    setIsMobileVerified(true);
                }
            })
            .catch(err => {
                console.log('ERROR2 ', err)
                setIsMobileVerified(false);
            })
    }, [])

    const handleMobileSubmit = () => {
        if(mobileValidation(mobile)){
            fetch(`http://localhost:3001/api/mobile?mobile=${encodeURIComponent(mobile)}`,
                { method: 'POST' })
                .then(resp => resp.json())
                .then(resp => {
                    if (resp.status === 400)
                        console.log('ERROR ', resp.message);
                    else {
                        console.log('Mobile ', resp);
                        setMyOtp(resp.otp); 
                        setIsMobileVerifyButtonClicked(() => true);
                    }
                })
                .catch(err => console.log('ERROR ', err))
        }
    }

    const handleOtpSubmit = () => {
        setIsMobileVerified(true);
    }

    return (
        <div style={{textAlign: 'center'}}>
        {
            isMobileverified 
            ?   <VerifyDevice user={user} handleLogout={handleLogout} /> 
            :   isMobileVerifyButtonClicked 
                ?   <OtpHandler myOtp={myOtp} onOtpSubmit={handleOtpSubmit} title='Enter Otp Sent to your Mobile Number' /> 
                :   <div>
                        <input
                            type='text'
                            value={mobile}
                            onChange={(event) => setMobile(event.target.value)}
                            placeholder='Enter Your Mobile Number'
                        />
                        <button onClick={handleMobileSubmit}>Verify Mobile Number</button>
                    </div>  
        }
        </div>           
    );
}

export default MobileHandler;