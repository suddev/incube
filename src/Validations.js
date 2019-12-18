export const emailValidation = (email) => { 
    if(!email) 
        alert('Enter Email id')
    else  
        return true
    return false
}

export const passwordValidation = (password, rePassword) => {
    if(!password) 
        alert('Enter Password')
    else if(rePassword && !(password === rePassword))
        alert('Passwords do not match. Try again !!!')
    else  
        return true
    return false
}

export const rePasswordValidation = (password, rePassword) => {
    if(!rePassword) 
        alert('Enter Re-tpye Password')
    else if(password && !(password === rePassword))
        alert('Passwords do not match. Try again !!!')
    else  
        return true
    return false
}

export const captchaValidation = (isCaptchaVerified) => {
    if(!isCaptchaVerified)
        alert('Please verify ReCaptcha')
    else
        return true
    return false;
}

export const mobileValidation = (mobile) => {
    return true;
}