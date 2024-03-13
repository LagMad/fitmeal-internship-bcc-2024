import React, {useState} from 'react'
import Register1 from '../shared/Register1'
import Register2 from '../shared/Register2'
import Register3 from '../shared/Register3'
import Register4 from '../shared/Register4'
import RegisterBG1 from '../../assets/RegisterBG1.png'
import RegisterBG2 from '../../assets/RegisterBG2.png'

const StepList = ["Register1", "Register2", "Register3", "Register4"]

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        business: "",
        sex: "",
        umur: "",
        address: "",
        weight: "",
        height: "",
        username: "",
        email: "",
        password: "",
    })

    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    const BoxList = [
        <Register1 nextStep={handleNextStep}/>,
        <Register2 nextStep={handleNextStep}/>,
        <Register3 nextStep={handleNextStep}/>,
        <Register4/>
    ]

  return (
    <div className='flex w-full h-auto'>
        <div className='flex flex-col relative w-full h-full justify-center items-center'>
            {BoxList[currentStep]}
            <img className='absolute left-0 top-52' src={RegisterBG1} alt='bg'/>
            <img className='absolute right-0 -bottom-40 z-40' src={RegisterBG2} alt='bg'/>
        </div>
    </div>
  )
}

export default RegisterForm