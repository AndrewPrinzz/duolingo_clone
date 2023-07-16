/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'

import { Language, LanguagesContainer, LanguageImage, Title } from 'compontents/lib';
import {useGetAvailableLanguages} from 'utils/hooks'

function SelectLanguage() {
  const {isLoading, isSuccess, data} = useGetAvailableLanguages();

  return (
    <>
      <Title css={{
        'text-align': 'center',
        'margin-top': '140px',
        'margin-bottom': '60px'
      }}>
        Select a language
      </Title>
      <LanguagesContainer>
        {isLoading ? (
          'Loading...'
        ) : isSuccess && data ? (
          Object.values(data.data[0].acf.languages).map(({language_name, image}, index) => {
            // Render your component logic here
            return <Language to={`${window.location.origin}/${language_name.toLowerCase()}`} key={language_name}>
              <LanguageImage>
                <img src={image} alt={language_name} />
              </LanguageImage>
              <span>
                {language_name}
              </span>
            </Language>
          })
        ) : (
          'Error occurred while fetching data'
        )}
      </LanguagesContainer>
    </>
  )
}

export {SelectLanguage}