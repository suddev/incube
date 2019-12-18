import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Register from '../../src/CustomSignIn/Register';

describe('Register Component', () => {
 
 it('Check if email input box is present', () => {
   expect(shallow(<Register />).find('#email').length).toEqual(1)
 })

 it('Check if password input box is present', () => {
    expect(shallow(<Register />).find('#password').length).toEqual(1)
  })

  it('Check if retype-password input box is present', () => {
    expect(shallow(<Register />).find('#repassword').length).toEqual(1)
  })

  it('Check if captcha field is present', () => {
    expect(shallow(<Register />).find('ReCaptcha').length).toEqual(1)
  })

  it('Check if otp handler field is present', () => {
    expect(shallow(<Register />).find('OtpHandler').length).toEqual(1)
  })

  it('Check if submit button is present', () => {
    expect(shallow(<Register />).find('#submit').length).toEqual(1)
  })
})