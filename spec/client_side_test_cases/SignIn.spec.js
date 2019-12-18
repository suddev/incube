import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SignIn from '../../src/CustomSignIn/SignIn';

describe('Login Component', () => {
 
 it('Check if email input box is present', () => {
   expect(shallow(<SignIn />).find('#email').length).toEqual(1)
 })

 it('Check if password input box is present', () => {
    expect(shallow(<SignIn />).find('#password').length).toEqual(1)
  })

  it('Check if submit button is present', () => {
    expect(shallow(<SignIn />).find('#submit').length).toEqual(1)
  })
})