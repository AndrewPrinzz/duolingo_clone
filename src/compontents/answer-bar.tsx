/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'

import {useSentenceReducer} from "context/sentence-reducer";
import {AnswerContainer, AnswerBarCorrect, AnswerBarIcon, AnswerBarLeft, AnswerBarRight, AnswerBarTitle, Button } from "./lib";
import { Colors } from 'styles/colors';
import {useParams} from 'react-router-dom';

const wrongAnswerImage = require('assets/img/wrong.svg').default
const correctAnswerImage = require('assets/img/correct-answer.svg').default



function AnswerAwaitAnswer() {
  const pageId = useParams()
  const [data, dispatch] = useSentenceReducer()

  return (
    <>
      <AnswerContainer background="#fff" css={{borderTop: `2px solid ${Colors.grayBg}`}}>
        <AnswerBarLeft>
          <Button btnStyle="gray">Skip</Button>
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
  const pageId = useParams()
  const [data, dispatch] = useSentenceReducer()

  return (
    <>
      <AnswerContainer background='#D7FFB8'>
        <AnswerBarLeft>
          <AnswerBarIcon>
            <img src={correctAnswerImage} />
          </AnswerBarIcon>
          <div>
            <AnswerBarTitle css={{color: '#58A700'}}>Nice!</AnswerBarTitle>
            <AnswerBarCorrect css={{color: '#58A700'}}>I love cocoa</AnswerBarCorrect>
          </div>
        </AnswerBarLeft>
        <AnswerBarRight>
          <Button onClick={() => dispatch({
              type: 'update'
            })}>Continue</Button>
        </AnswerBarRight>
      </AnswerContainer>
    </>
  )
}

function AnswerWrongAnswer() {
  const pageId = useParams()
  const [data, dispatch] = useSentenceReducer()

  return (
    <AnswerContainer>
      <AnswerBarLeft>
        <AnswerBarIcon>
          <img src={wrongAnswerImage} />
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
    </AnswerContainer>
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