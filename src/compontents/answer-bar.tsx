/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'

import {useSentenceReducer} from "context/sentence-reducer";
import {AnswerContainer, AnswerContainerResponse, AnswerBarCorrect, AnswerBarIcon, AnswerBarLeft, AnswerBarRight, AnswerBarTitle, Button } from "./lib";
import { Colors } from 'styles/colors';
import {useParams} from 'react-router-dom';
import { imageList } from './preload-images';

function AnswerAwaitAnswer() {
  const [, dispatch] = useSentenceReducer()

  return (
    <>
      <AnswerContainer background="#fff" css={{borderTop: `2px solid ${Colors.grayBg}`}}>
        <AnswerBarLeft>
          <Button btnStyle="gray"
            onClick={() => dispatch({
              type: 'update'
            })}
          >Skip</Button>
        </AnswerBarLeft>
          <Button
            onClick={() => dispatch({
              type: 'check'
            })}
          >Check</Button>
      </AnswerContainer>
    </>
  )
}

function AnswerCorrectAnswer() {
  const [data, dispatch] = useSentenceReducer()

  return (
    <>
      <AnswerContainerResponse background='#D7FFB8'>
        <AnswerBarLeft>
          <AnswerBarIcon>
            <img src={imageList.correctAnswer} />
          </AnswerBarIcon>
          <div>
            <AnswerBarTitle css={{color: '#58A700'}}>Nice!</AnswerBarTitle>
            <AnswerBarCorrect css={{color: '#58A700'}}>{data.sentence.translated_sentence}</AnswerBarCorrect>
          </div>
        </AnswerBarLeft>
        <AnswerBarRight>
          <Button onClick={() => dispatch({
              type: 'update'
            })}>Continue</Button>
        </AnswerBarRight>
      </AnswerContainerResponse>
    </>
  )
}

function AnswerWrongAnswer() {
  const [data, dispatch] = useSentenceReducer()

  return (
    <AnswerContainerResponse>
      <AnswerBarLeft>
        <AnswerBarIcon>
          <img src={imageList.wrongAnswer} />
        </AnswerBarIcon>
        <div>
          <AnswerBarTitle>Correct solution:</AnswerBarTitle>
          <AnswerBarCorrect>{data.sentence.translated_sentence}</AnswerBarCorrect>
        </div>
      </AnswerBarLeft>
      <AnswerBarRight>
        <Button
          onClick={() => dispatch({
            type: 'update'
          })} 
          btnStyle='red'
        >Continue</Button>
      </AnswerBarRight>
    </AnswerContainerResponse>
  )
}

function AnswerBar() {
  const pageId = useParams()
  const [data, dispatch] = useSentenceReducer()


  return (
    <>
      {
        data.answer === 'await' ? <AnswerAwaitAnswer /> : 
        data.answer === 'correct' ? <AnswerCorrectAnswer /> : 
        data.answer === 'incorrect' ? <AnswerWrongAnswer /> : 
        null
      }
      
      
      

    </>
  )
}

export {AnswerBar}