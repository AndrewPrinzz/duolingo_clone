/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

import { css } from '@emotion/css'
import * as React from 'react'
import {Container} from './compontents/lib'
import {Home} from 'screens/home'
import {SelectLanguage} from 'screens/select-language'
import {BrowserRouter as Router, Link as RouterLink, Routes, Route} from 'react-router-dom'

const logo = require('./assets/img/logo.svg').default

type ErrorProps = {
  error: string
}

function ErrorFallback({error}: ErrorProps) {
  return (
    <div>
      An error ocured {error}
    </div>
  )
}

function Header() {
  return (
    <div css={{
      width: '100%',
      display: 'flex',
      paddingTop: '40px',
    }}>
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div>
      {/* © Andrew Prinz {new Date().getFullYear()} */}
    </div>
  )  
}

function App() {
  return ( 
    <Container>
      <Header />
        <AppRoutes />
      <Footer />
    </Container>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/select-language/' element={<SelectLanguage />} />
      <Route path='/language-exercise' element={<div>test</div>} />
    </Routes>
  )
}

export default App
