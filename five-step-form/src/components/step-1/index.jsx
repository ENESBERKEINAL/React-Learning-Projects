import React from 'react'
import Step from '../step'
import * as S from './styled'

import FormsJSON from '../../form.json'

function Step1({onStepSubmit ,...props}) {
  const {step1} = FormsJSON
  const hasError = false

  const onSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData(e.target);
    let formProperties = Object.fromEntries(formData.entries);

    onStepSubmit('step1', formProperties)
  }
  return (<>
    <Step {...props} handleSubmit={onSubmit}>
    <S.Step1>
    {
      step1.map( (item) => (

        <S.FormItem key={item.id} hasError={hasError}>
        <S.Label htmlFor={item.id}> {item.label}</S.Label>
        <S.Input name={item.id} type={item.type} placeholder={item.placeholder}/>
        
        
        {hasError && (<S.ErrorMessage>Required</S.ErrorMessage>)}
        </S.FormItem>
        )
        
      )
    }
    </S.Step1>
    </Step>
    
    
    </>
    
    )
  }

export default Step1