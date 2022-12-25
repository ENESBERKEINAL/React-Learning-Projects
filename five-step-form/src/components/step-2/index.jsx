import React, { useEffect, useState } from 'react'
import Step from '../step'
import * as S from './styled'
import FromJSON from '../../form.json'

import {
        Icons,
        DEFAULT_PLAN,
        DEFAULT_BILLING_TYPE,
        YEARLY,
        MONTHLY} from './constants'


const {step2} = FromJSON;

function Step2({onStepSubmit, formData, ...props}) {
  const [plan, setPlan] = useState(DEFAULT_PLAN)
  const [billingType, setBillingType] = useState(DEFAULT_BILLING_TYPE)

  useEffect(() => {
    let {plan} = formData?.step2
    let {billingType} = formData?.step2
  
    return () => {
      plan && setPlan(plan)
      billingType && setBillingType(billingType)
    }
  }, [])
  

  const changePlan = (newPlan) => {
    setPlan(newPlan)
  }

  const changeBillingType = (newBillingType) => {
    setBillingType(newBillingType)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData(e.target);
    let formProperties = Object.fromEntries(formData.entries);

    onStepSubmit('step2', {
      billingType,
      plan
    })
  }

  return (
    
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step2>
        <S.RadioGroup>
          {
            step2[billingType].map((item) => (

              <S.RadioLabel key={item.id} isSelected={item.id === plan.id}>
                <S.RadioInput name='plan-type' type="radio" onChange={() => changePlan(item)} />
                <S.Icon src={Icons[item.id]} />
                <S.Title>{item.title}</S.Title>
                <S.SubTitle>{item.price}</S.SubTitle>
                {billingType === YEARLY && ( <S.Description>{item.description}</S.Description> )}
              </S.RadioLabel>
            ))
          }
        </S.RadioGroup>
        <S.BillingGroup>
          <S.BillingButton type="button" isSelected={billingType == MONTHLY} onClick= {() => changeBillingType(MONTHLY)}>Monthly</S.BillingButton>
          <S.BillingButton type="button" isSelected={billingType == YEARLY} onClick= {() => changeBillingType(YEARLY)}>Yearly</S.BillingButton>
        </S.BillingGroup>
      </S.Step2>
    </Step>
  )
}

export default Step2