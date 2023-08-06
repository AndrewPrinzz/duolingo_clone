/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'
import React from 'react'

import {BackArrow, FullPageSpinner, LanguagesContainer, RemoveWord, SentenceBottom, SentenceBuilderContainer, SentenceMiddle, SentenceTop, SentenceWord, TitleWithSpace} from "compontents/lib";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {getDataId, getCurrentTopicData, getRandomInt} from 'utils/helpers'
import { useGetLanguageData } from "utils/hooks"
import { AnswerBar } from 'compontents/answer-bar';
import {useSentenceReducer, initialState, useSentenceCache} from 'context/sentence-reducer';
import { TitleWithBackButton } from 'compontents/compontents';

const removeImage = require('assets/img/delete.png')

function SentenceBuider() {
  const pageId = useParams()
  
  const dataId = getDataId(useLocation().pathname)
  const {isLoading, isSuccess, isError, data} = useGetLanguageData(dataId)

  const [{sentence, ...sentencesData}, dispatch] = useSentenceReducer()
  
  React.useEffect(() => {
    if (isSuccess) {
      // we need to get data of the topic we work with
      const topicData = getCurrentTopicData(data, +pageId.id)
      // also we wanna display a random sentence from the list
      const randomSentenceIndex = getRandomInt(topicData.acf.words.length)
      
      
        dispatch({
          type: 'init',
          payload: {
            ...initialState,
            data: topicData,
            sentence: topicData.acf.words[randomSentenceIndex],
            prevIndex: randomSentenceIndex,
          }
        })
    }
  }, [isSuccess]);

  return (
    <SentenceBuilderContainer>
      <LanguagesContainer>
        <div css={{display: 'flex', flexDirection: 'column', minWidth: '100%'}}>
            {isLoading ? (
              <FullPageSpinner />
              ) : isSuccess && data && sentence ? (
                <>
                <TitleWithBackButton css={{marginTop: 40}}>
                  Create a sentence
                </TitleWithBackButton>
                <SentenceTop>
                  <img src={sentencesData.teacherImage} alt="teacher-image" />
                  <span>{sentence.sentence_to_translate}</span>
                  <RemoveWord onClick={() => dispatch({type: 'remove-word'})}>
                    <img src={removeImage} alt="remove the last word" />
                  </RemoveWord>
                </SentenceTop>
                <SentenceMiddle>
                  {sentencesData.storeClickedWord.map((item, index) => 
                      <SentenceWord key={`${item}${index}`}>{item[1]}</SentenceWord>
                    )}
                </SentenceMiddle>
                <SentenceBottom>
                {Object.entries(sentencesData.listOfWords).map(([word, value], index) => (
                // If value is a number, generate the component multiple times
                // based on the value
                // Array.from({ length: Number(value) }).map((_, innerIndex) => (
                  <SentenceWord
                    key={`${word}-${index}`}
                    onClick={value ? () =>
                      dispatch({
                        type: 'add-word',
                        payload: {
                          clickedWord: [word, String(value)],
                        },
                      }) : undefined
                    }
                    css={value ? undefined : { background: '#E5E5E5', color: '#E5E5E5' }}
                  >
                    {String(value ? value : word.replace(/-.*/, ""))}
                  </SentenceWord>
                // ))
              ))}
              </SentenceBottom>
              </>
            ) : isError ? (
              'Error occurred while fetching data'
            ) : null}
          </div>
      </LanguagesContainer>
      {isSuccess && data && sentence ? <AnswerBar /> : null}
      
      

    </SentenceBuilderContainer>
  )
}

export {SentenceBuider}