import React from 'react'
import FooterALT from '../components/shared/FooterALT'
import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <div className='flex flex-col items-center font-Poppins'>
        <RegisterForm/>
        <FooterALT position={"left"}/>
    </div>
  )
}

export default RegisterPage;