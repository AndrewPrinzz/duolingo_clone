/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'

import * as React from 'react'
import {keyframes} from '@emotion/css'

import {Colors} from 'styles/colors'
import styled from "@emotion/styled/macro"
import {css} from '@emotion/react'
import {Link} from 'react-router-dom'
import {FaSpinner} from 'react-icons/fa'

const spin = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(360deg)'},
})

export const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
})

export function FullPageSpinner() {
  return (
    <div
      css={{
        fontSize: '4em',
        height: '300px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // background: '#000'
      }}
    >
      <Spinner />
    </div>
  )
}

type ButtonProps = {
  btnStyle?: "gray" | "red" | undefined
}

export const Button = styled.div<ButtonProps>(({btnStyle}) => css`
  display: flex;
  padding-top: 13px;
  padding-bottom: 13px;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: ${btnStyle === 'gray' ? '#AFAFAF' : '#fff'};
  background: ${btnStyle === 'gray' ? '#fff' : btnStyle === 'red' ? '#FF4B4B' : '#58CC02'};
  box-shadow: 0px 4px 0px ${btnStyle === 'gray' ? '#E5E5E5' : btnStyle === 'red' ? '#EA2B2B' : '#58A700'};
  border-radius: 12px; 
  ${btnStyle === 'gray' ? 'border: 2px solid #e5e5e5' : ''};
  width: fit-content;
  padding-left: 60px;
  padding-right: 60px;
  text-transform: uppercase;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  max-width: 100%;
  :hover {
    /* color: #fff!important; */
  }
  :active {
    /* Styles for pressing effect */
    transform: translateY(2px); /* Adjust the amount of translation as needed */
    box-shadow: none; /* Remove the shadow while pressing */
  }
`)

export const Container = styled.div`
  max-width: 1040px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 32px;
  color: ${Colors.default};
  font-weight: 700;
`

export const HomeScreen = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  img {
    min-width: 450px;
    min-height: 450px;
  }
  @media (max-width: 767px) {
    padding-left: 10px;
    padding-right: 20px;
    img {
      min-width: 100%;
      min-height: 100%;
    }
  }
  ${Title} {
    font-size: 24px;
  }
  ${Button} {

  }
`

export const TitleWithSpace = styled(Title)`
  text-align: center;
  /* margin-top: 140px;
  margin-bottom: 60px; */
  @media (max-width: 767px) {
    font-size: 25px;
    /* margin-top: 30px;
    margin-bottom: 30px; */
  }
`

export const TitleContainer = styled.div`
  margin-top: 120px;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    font-size: 25px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`

interface LanguageContainerProps {
  width?: number;
}

export const LanguagesContainer = styled.div<LanguageContainerProps>(({width = 672}) => css`
  display: flex;
  margin: auto;
  max-width: ${width + 20}px;
  flex-wrap: wrap;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
  flex-direction: column;
  margin-top: 0;
  @media (max-width: 767px) {
    max-width: 100%;
  }
`)

export const Languages = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 692px) {
    justify-content: space-between;
  }
`

export const Language = styled(Link)`
  width: 180px;
  border-radius: 16px;
  border: 4px solid #EEE;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 25px 40px;
  margin-left: 22px;
  margin-right: 22px;
  margin-bottom: 30px;
  span {
    margin-top: 9px;
    color: #000;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
  @media (max-width: 692px) {
    width: 40%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const LanguageImage = styled.div`
  width: 100px;
  height: 80px;
  img {
    width: 100px;
  }
`

export const TopicBlock = styled.div`
  min-width: 100%;
  display: flex;
  padding: 30px;
  border-radius: 12px;
  border: 2px solid #E5E5E5;
  background: #FFF;
  box-shadow: 0px 2px 0px 0px #E5E5E5;
  align-items: center;
  span {
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    padding-left: 37px;
    padding-right: 30px;
  }
  :not(:first-of-type) {
    margin-top: 40px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    a {
      min-width: 100%;      
      div {
        width: 100%;
      }
    }
    span {
      margin: 20px 0px;
      text-align: center;
      font-size: 22px;
    }
  }
`

export const SentenceTop = styled.div`
  display: flex;
  align-items: end;
  marginTop: 15px;
  span {
    color: ${Colors.purple};
    text-decoration: underline;
    padding: 21px;
    border-radius: 15px;
    border: 2px solid #E5E5E5;
    line-height: 1.3;
    transform: translateY(-34px);
    font-weight: 700;
    margin-right: 30px;
  }
  img {
    width: 111px;
    height: 165px;
  }
  @media (max-width: 767px) {
    img {
      width: 70px;
      height: 104px;
    }
    span {
      padding: 15px;
      font-size: 14px;
      @media (max-width: 767px) {
        margin-top: 20px;
      }
    }
  }
`

export const SentenceMiddle = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-top: 2px solid ${Colors.grayBg};
  border-bottom: 2px solid ${Colors.grayBg};
  min-height: 124px;
  position: relative;
  :before {
    content: '';
    height: 2px;
    width: 100%;
    /* background: ${Colors.grayBg}; */
    position: absolute;
    top: 58px;
  }
  @media (max-width: 767px) {
    min-height: 90px;
    :before {
      top: 43px;
    }
  }
`

export const RemoveWord = styled.div`
  margin-left: auto;
  img {
    max-width: 51px!important;
    width: 51px!important;
    max-height: 51px!important;
    cursor: pointer;
    @media (max-width: 767px) {
      max-width: 35px!important;
      width: 35px!important;
      max-height: 35px!important;
    }
  }
`

export const SentenceBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  padding-bottom: 20px;
`

export const SentenceWord = styled.div`
  display: flex;
  font-size: 15px;
  /* text-transform: lowercase; */
  color: ${Colors.default};
  border-radius: 12px;
  border: 2px solid #E5E5E5;
  background: #FFF;
  box-shadow: 0px 2px 0px 0px #E5E5E5;
  padding: 14px 18px;
  margin-top: 4px!important;
  margin-bottom: 4px;
  font-weight: 600;
  cursor: pointer;
  height: 50px;
  /* position: relative; */
  :not(:last-child) {
    margin-right: 5px;
  }
  :before {
    /* content: '';
    position: absolute;
    height: 2px;
    background: red;
    width: 100%;
    left: 0;
    top: -2px */
  }
  @media (max-width: 767px) {
    font-size: 12px;
    height: 34px;
    padding: 8px 11px;
  }
`

type AnswerContainerProps = {
  background?: `#${string}`;
}

export const AnswerContainer = styled.div<AnswerContainerProps>(({background = '#FFDFE0'}) => css`
  background: ${background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 160px;
  padding-right: 160px;
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 130px;
  @media (max-width: 940px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 767px) {
    ${Button} {
      font-size: 12px;
      letter-spacing: 0.1em;
      padding: 10px 40px 10px 40px;
      
    }
  }
`)

export const AnswerBarLeft = styled.div`
  display: flex;
  align-items: center;
`

export const AnswerBarRight = styled.div`
  display: flex;
`

export const AnswerBarIcon = styled.div`
  margin-right: 20px;
  img {
    max-width: 80px;
  }
`

export const AnswerBarTitle = styled.div`
  color: #EA2B2B;
  font-size: 38px;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 700;
`

export const AnswerBarCorrect = styled.div`
  font-size: 17px;
  color: #EA2B2B;
`

export const BackArrow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-left: 5px;
    color: #3C3C3C;
    font-size: 12px;
    font-weight: 700;
  }
`

export const SentenceBuilderContainer = styled.div`
  height: calc(100vh - 82px);
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    marginTop: -40px;
  }
`

export const AnswerContainerResponse = styled(AnswerContainer)`
  @media (max-width: 767px) {
    flex-direction: column;
    ${Button} {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    img {
      width: 60px;
    }
    ${AnswerBarTitle} {
      font-size: 18px;
    }
    ${AnswerBarCorrect} {
      font-size: 14px;
    }
    ${AnswerBarLeft} {
      margin-top: 13px;
    }
  }
` 