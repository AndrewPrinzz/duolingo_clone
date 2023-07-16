/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'

import React from 'react'
import { Title, Button, HomeScreen } from 'compontents/lib'
import { NavLink } from 'react-router-dom'

const image = require('assets/img/main-image.png')

function Home() {
  return (
    <HomeScreen>
      <Title css={{maxWidth: '575px', margin: 'auto', textAlign: 'center'}}>
        The free, fun, and effective way to learn a language!
      </Title>
      <img css={{
        maxWidth: '450px',
        margin: 'auto'
      }} src={image} />
      
      <div css={{marginTop: '40px'}}>
        <NavLink to="/select-language/">
          <Button css={{
            margin: 'auto',
            width: '325px'
          }}>Get started</Button>
        </NavLink>
      </div>
    </HomeScreen>
  )
}

export {Home}