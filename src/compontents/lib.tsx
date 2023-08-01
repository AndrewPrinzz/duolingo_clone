/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'

import * as React from 'react'
import {keyframes} from '@emotion/css'

import {Colors} from 'styles/colors'
import styled from '@emotion/styled'
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
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#000'
      }}
    >
      <Spinner />
    </div>
  )
}

export const Container = styled.div`
  width: 1040px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
`

export const HomeScreen = styled.div`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 32px;
  color: ${Colors.default};
  font-weight: 700;
`

export const TitleWithSpace = styled(Title)`
  text-align: center;
  margin-top: 140px;
  margin-bottom: 60px;
`

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
  :hover {
    /* color: #fff!important; */
  }
`)

interface LanguageContainerProps {
  width?: number;
}

export const LanguagesContainer = styled.div<LanguageContainerProps>(({width = 672}) => css`
  display: flex;
  margin: auto;
  width: ${width + 20}px;
  flex-wrap: wrap;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
  flex-direction: column;
`)

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
  span {
    margin-top: 9px;
    color: #000;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
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
`

export const RemoveWord = styled.div`
  margin-left: auto;
  img {
    width: 51px;
    cursor: pointer;
  }
`

export const SentenceTop = styled.div`
  display: flex;
  align-items: end;
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
    background: ${Colors.grayBg};
    position: absolute;
    top: 50%;
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
  text-transform: lowercase;
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
  :not(:last-child) {
    margin-right: 5px;
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
  min-height: 150px;
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