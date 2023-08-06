/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

import { css } from '@emotion/css'
import * as React from 'react'
import {Container} from './compontents/lib'
import {Home} from 'screens/home'
import {SelectLanguage} from 'screens/select-language'
import {BrowserRouter as Router, Link as RouterLink, Routes, Route, Link} from 'react-router-dom'
import { LanguageTopic } from 'screens/language-topic'
import { SentenceBuider } from 'screens/sentence-builder'
import { PreloadImages } from 'compontents/preload-images'
import config from 'config.json'

const logo = `${config.serverUrl}wp-content/uploads/2023/08/logo.svg`

function Header() {
  return (
    <div css={{
      width: '100%',
      display: 'flex',
      paddingTop: '40px',
    }}>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
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
    <>
      <Container>
        <Header />
        <PreloadImages />
      </Container>
        <AppRoutes />
      <Footer />
    </>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/select-language/' element={<SelectLanguage />} />
      <Route path='/select-language/:id/' element={<LanguageTopic />} />
      <Route path='/select-language/:id/:id/' element={<SentenceBuider />} />
    </Routes>
  )
}

export default App
