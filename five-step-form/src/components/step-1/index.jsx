import React from 'react'
import Step from '../step'
import * as S from './styled'

import FormsJSON from '../../form.json'

function Step1(props) {
  const {step1} = FormsJSON
  console.log("pros from out", step1)
  return (<>
    
    <Step {...props}>
    <S.Step1>
    
    
    {
      step1.map( (item) => (

        <S.FormItem key={item.id}>
        <S.Label htmlFor={item.id}> {item.label}</S.Label>
        <S.Input name={item.id} type={item.type} placeholder={item.placeholder}/>
        <S.ErrorMessage>Required</S.ErrorMessage>
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