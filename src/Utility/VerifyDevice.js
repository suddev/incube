import React, { useState, useEffect } from 'react';
import OtpHandler from './OtpHandler';
import Profile from '../Profile';

const VerifyDevice = ({user, handleLogout}) => {

    const [myOtp, setMyOtp] = useState('');
    const [isDeviceVerified, setIsDeviceVerified] = useState(false);

    // make a node call to check in database if the user's device is verified
    useEffect(() => {
        console.log('HI')
        console.log('USER ',user)
        fetch(`http://localhost:3001/api/deviceverification?id=${encodeURIComponent(user.id)}`,
            { method: 'POST' })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.message === 'user is verified'){
                    console.log('User ', resp);
                    setIsDeviceVerified(true);
                }
                else {
                    console.log('OTP ', resp);
                    setMyOtp(resp.otp);
                }
            })
            .catch(console.log)
    }, [])
    
    const handleOtpSubmit = () => {
        // Make a database  call  to  store users current  device information
        fetch(`http://localhost:3001/api/storedevice?id=${encodeURIComponent(user.id)}`,
            { method: 'POST' })
            .then(resp => resp.json())
            .then(resp => {
                if(resp.status === 'success')
                    setIsDeviceVerified(true)
            })
            .catch(console.log)
    }

    return (
        isDeviceVerified 
        ?   <Profile user={user} handleLogout={handleLogout} /> 
        :   <OtpHandler myOtp={myOtp} onOtpSubmit={handleOtpSubmit} 
                title='Enter Otp Sent to your Mobile Number and Email Id' />             
    );
}

export default VerifyDevice;