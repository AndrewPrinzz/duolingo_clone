/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'
import { TitleWithBackButton } from 'compontents/compontents';

import {Language, LanguagesContainer, LanguageImage, TitleWithSpace, FullPageSpinner, Languages} from 'compontents/lib';
import { useSentenceReducer } from 'context/sentence-reducer';
import { useLocation } from 'react-router-dom';
import {useGetAvailableLanguages, useGetLanguageData} from 'utils/hooks'

function SelectLanguage() {
  const {isLoading, isSuccess, data} = useGetAvailableLanguages()  

  return (
    <>
      <LanguagesContainer css={{marginBottom: 100}}>
        <TitleWithBackButton>Select a language</TitleWithBackButton>
        <Languages>
          {isLoading ? (
            <FullPageSpinner />
          ) : isSuccess && data ? (
            Object.values(data.data[0].acf.languages).map(({language_name, image}, index) => {
              return <Language 
                to={`${window.location.origin}/select-language/${language_name.toLowerCase()}`} 
                key={language_name}
              >
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
        </Languages>
      </LanguagesContainer>
    </>
  )
}

export {SelectLanguage}