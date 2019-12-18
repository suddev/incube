import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CustomSignInButton from '../../src/CustomSignIn/CustomSignInButton';

describe('Custom SignIn Component', () => {
 
 it('Check if submit button is present', () => {
   expect(shallow(<CustomSignInButton isUserSignedIn='none' />).find('#button').length).toEqual(1)
 })

 it('Check if button img is present', () => {
    expect(shallow(<CustomSignInButton isUserSignedIn='none' />).find('#button_img').length).toEqual(1)
  })

  it('Check if button text is present', () => {
    expect(shallow(<CustomSignInButton isUserSignedIn='none' />).find('#button_text').length).toEqual(1)
  })

  it('Check if SignIn component is present', () => {
    expect(shallow(<CustomSignInButton />).find('SignIn').length).toEqual(1)
  })

  it('Check if Register Component is present', () => {
    expect(shallow(<CustomSignInButton />).find('Register').length).toEqual(1)
  })
})