import React from 'react'
import RegisterForm from './components/RegisterForm'

export const dynamic = "force-static";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <RegisterForm />
    </div>
  )
}

export default RegisterPage