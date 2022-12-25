import React, { useState } from 'react'
import Step from '../step'
import * as S from './styled'
import FormJSON from '../../form.json'

const {step3} = FormJSON

function Step3({ onStepSubmit, formData,...props}) {
  const [selectedAddons, setSelectedAddons] = useState([])

  const {billingType} = formData.step2

  const changeSelectedAddons = (checked , selectedAddon) => {
    if(checked){

      setSelectedAddons([...selectedAddons, selectedAddon])
    } else{
      setSelectedAddons(selectedAddons.filter(addon => addon.id !== selectedAddon.id))
      
    }
  }

  const setSelected = (id) => {
    return selectedAddons.some((i) => i.id === id)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    onStepSubmit('step3', {selectedAddons})
  }
 
  return (<Step {...props} handleSubmit={onSubmit}>
    <S.Step3>
    {step3[billingType].map((item) => (
        <S.Item key={item.id} isSelected={setSelected(item.id)}>
          <S.Input type='checkbox' onChange={ (e) => changeSelectedAddons(e.target.checked, item)}/>
          <S.InputBody>
            <S.Title>{item.title}</S.Title>
            <S.SubTitle>{item.description}</S.SubTitle>
          </S.InputBody>
          <S.Price>{item.price}</S.Price>
        </S.Item>
      
      ))  
    }

    </S.Step3>
    
    </Step>
  )
}

export default Step3