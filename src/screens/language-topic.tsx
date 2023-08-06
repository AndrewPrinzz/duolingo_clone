/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'
import { StarIcon } from 'compontents/icons';
import { Button, FullPageSpinner, Language, LanguagesContainer, TitleWithSpace, TopicBlock } from 'compontents/lib';
import { Link, useLocation, useParams } from 'react-router-dom'
import { linkify, useGetLanguageData } from 'utils/hooks';
import styled from '@emotion/styled'
import { useSentenceReducer } from 'context/sentence-reducer';
import { TitleWithBackButton } from 'compontents/compontents';

function LanguageTopic() {
  const {id} = useParams()
  const {pathname} = useLocation()
  // get a language
  const {isLoading, isSuccess, data} = useGetLanguageData(id)
  const [, dispatch] = useSentenceReducer()

  return (
    <>
      <LanguagesContainer width={1000} css={{marginBottom: 150}}>
      {/* <TitleWithSpace css={{textAlign: 'center'}}></TitleWithSpace> */}
      <TitleWithBackButton css={{marginTop: 140, marginBottom: 60}}>Choose a topic</TitleWithBackButton>
        <div css={{display: 'flex', flexDirection: 'column', minWidth: '100%', marginBottom: 150 }}>
          {isLoading ? (
            <FullPageSpinner />
          ) : isSuccess ? (
              Array.from(data.data).reverse().map(item => 
                <TopicBlock key={item.acf.topic_name}>
                  <div>
                    <StarIcon width={47} />
                  </div>
                  <span>
                    {item.acf.topic_name}
                  </span>
                  <Link css={{marginLeft: 'auto'}} to={`${pathname}/${item.id}`}>
                    <Button onClick={() => dispatch({type: 'reset'})}>Continue</Button>
                  </Link>
                </TopicBlock>
              )
          ) : (
            'Error occurred while fetching data'
          )}
        </div>
      </LanguagesContainer>
    </>
  )
}

export {LanguageTopic}