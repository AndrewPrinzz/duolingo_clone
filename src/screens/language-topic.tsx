/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'
import { StarIcon } from 'compontents/icons';
import { Button, Language, LanguagesContainer, TitleWithSpace, TopicBlock } from 'compontents/lib';
import { Link, useLocation, useParams } from 'react-router-dom'
import { linkify, useGetLanguageData } from 'utils/hooks';
import styled from '@emotion/styled'
import { useSentenceReducer } from 'context/sentence-reducer';

function LanguageTopic() {
  const {id} = useParams()
  const {pathname} = useLocation()
  // get a language
  const {isLoading, isSuccess, data} = useGetLanguageData(id)
  const [, dispatch] = useSentenceReducer()

  return (
    <>
      <TitleWithSpace css={{textAlign: 'center'}}>Choose a topic</TitleWithSpace>
      <LanguagesContainer width={1000}>
        <div css={{display: 'flex', flexDirection: 'column', minWidth: '100%'}}>
          {isLoading ? (
            'Loading...'
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