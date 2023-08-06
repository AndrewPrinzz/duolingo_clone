/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'

import React from 'react'
import { BackArrow, TitleContainer, TitleWithSpace } from 'compontents/lib'
import { useNavigate } from 'react-router-dom'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

const backArrowImage = require('assets/img/back-arrow.svg').default

function TitleWithBackButton({children, ...props}) {
  const navigate = useNavigate()
  
  return (
    <TitleContainer css={{display: 'flex', justifyContent: 'space-between'}} {...props}>
      <TitleWithSpace css={{textAlign: 'left'}}>
        {children}
      </TitleWithSpace>
      <BackArrow onClick={() => navigate(-1)}>
        <img src={backArrowImage} />
        <span>BACK</span>
      </BackArrow>
    </TitleContainer>
  )
}

export {TitleWithBackButton}