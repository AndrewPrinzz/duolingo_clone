/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'

import React from 'react'
import { Title, Button, HomeScreen } from 'compontents/lib'
import { NavLink } from 'react-router-dom'
import config from 'config.json'

const image = `${config.serverUrl}wp-content/uploads/2023/08/main-image.png`

function Home() {
  return (
    <HomeScreen>
      <Title css={{maxWidth: '575px', margin: 'auto', textAlign: 'center'}}>
        The free, fun, and effective way to learn a language!
      </Title>

      <img src={image} />
      
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