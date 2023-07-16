/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'

import * as React from 'react'

import {Colors} from 'styles/colors'
import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

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

export const Button = styled.div`
  display: flex;
  padding-top: 13px;
  padding-bottom: 13px;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #FFFFFF;
  background: #58CC02;
  box-shadow: 0px 4px 0px #58A700;
  border-radius: 12px;
  width: fit-content;
  padding-left: 60px;
  padding-right: 60px;
  text-transform: uppercase;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    color: #fff!important;
  }
`

export const LanguagesContainer = styled.div`
  display: flex;
  margin: auto;
  width: 672px;
  flex-wrap: wrap;
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
  img {
    width: 100px;
  }
`