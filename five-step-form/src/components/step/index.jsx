import React from 'react'
import * as S from './styled'

function Step({
  title,
  subTitle,
  hasBackButton,
  hasNextButton,
  children
}) {
  return (
    
    <S.Step>
      <S.StepHeader>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>

      </S.StepHeader>
      <S.Body>
      {console.log("childeren are",children)}
      {children}
      </S.Body>
      <S.StepFooter>
      {hasBackButton &&  <S.GoBackButton>Go Back</S.GoBackButton> }
      {hasNextButton &&   <S.GoNextButton>Next Step</S.GoNextButton> }
      </S.StepFooter>

    </S.Step>
  )
}

export default Step