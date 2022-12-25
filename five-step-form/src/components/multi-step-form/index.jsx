import React, { useState } from 'react'
import SideBar from '../sidebar'
import Step1 from '../step-1'
import Step2 from '../step-2';
import Step3 from '../step-3';
import Step4 from '../step-4';

import * as S from "./styled";

const Steps = {
  step1:{
    component: Step1,
    title:"Enesss" ,
    subTitle:"Please write down your personal info down below step1",
    hasNextButton:true,
  },
  step2:{
    component: Step2,
    title:"Select Your Plan" ,
    subTitle:"You have the option of billing.",
    hasBackButton:true,
    hasNextButton:true,
  },
  step3: {
    component: Step3,
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience.",
    hasNextButton: true,
    hasBackButton: true,
  },
  step4: {
    component: Step4,
    title: "Finishing up",
    subtitle: "Double-check eveything looks OK before confirming.",
    hasBackButton: true,
  },
}


function MultiStepForm() {
  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {},
  })

  const [activeStep, setActiveStep] = useState('step1')
  const ActiveStep = Steps[activeStep].component

  const handleStepSubmit = (stepId, stepData) => {
    setFormData({
      ...formData,
      [stepId]: stepData
    })

    setActiveStep('step'+ (stepId.slice(-1)*1 + 1))
  }

  
  console.log(formData)
  
  const handleBack = () =>{
    const currentStepNumber = Number(activeStep.slice(-1))

    setActiveStep(`step${currentStepNumber-1}`)
  }
  return (
    <S.MultiStepForm>

    <SideBar activeStep={activeStep}/>
    <ActiveStep {...Steps[activeStep]} onStepSubmit={handleStepSubmit} formData={formData} onBack={handleBack}/>
    
    </S.MultiStepForm>
  )
}

export default MultiStepForm