import { getRandomInt, shuffle } from "utils/helpers"
import type { sentenceActions, sentenceState } from "utils/types"
import { LanguageDataObject } from "utils/hooks"
import React, {Dispatch} from "react"

const initialState: sentenceState = {
  data: null,
  sentence: null,
  prevIndex: null,
  listOfWords: {},
  storeClickedWord: [],
  answer: 'await',
  complete: false
}

function sentenceReducer(
  sentenceState: sentenceState, 
  sentenceAction: sentenceActions
): sentenceState {
  function sentenceMixer(sentence: LanguageDataObject, index: number): {[key: string]: boolean} {
    const currTopicData = sentence.acf.words
    const currSentence = currTopicData[index]
    
    let allPossibleWords = currSentence.possible_words.map(({word}) => (word))
    allPossibleWords.push(...currSentence.translated_sentence.split(' '))
    const shuffled = shuffle(Array.from(allPossibleWords))
    const ret = shuffled.reduce((acc, item, index) => {
      acc[`${item}-${index}`] = item
      return acc
    }, {})
    
    return ret
  }

  switch (sentenceAction.type) {
    case 'init':

      return {
        ...initialState,
        ...sentenceState,
        ...sentenceAction.payload,
        listOfWords: sentenceMixer(sentenceAction.payload.data, sentenceAction.payload.prevIndex)
      }
    case 'update':
      const {data, prevIndex} = sentenceState
      const randomSentenceIndex = getRandomInt(data.acf.words.length, prevIndex)

      return {
        ...sentenceState,
        sentence: sentenceState.data.acf.words[randomSentenceIndex],
        prevIndex: randomSentenceIndex,
        listOfWords: sentenceMixer(sentenceState.data, randomSentenceIndex),
        storeClickedWord: [],
        answer: 'await',
        complete: false
      }
    case 'add-word':
      if (sentenceState.complete) return sentenceState

      const [key, value] = sentenceAction.payload.clickedWord;
      sentenceState.listOfWords[key] = false
      
      return {
        ...sentenceState,
        storeClickedWord: [...sentenceState.storeClickedWord, [key, value]],
        listOfWords: {
          ...sentenceState.listOfWords,
          [key]: false,
        },
        complete: false
      }
    case 'clear':
      return {...sentenceState}
    case 'reset':
      return {...initialState}
    case 'check':
      const translatedSentence = sentenceState.sentence.translated_sentence.split(' ')
      const createdSentence = sentenceState.storeClickedWord

      let answer: 'correct' | 'incorrect' = 'correct';

      // if lengths are not equal the answer is wrong
      if (createdSentence.length !== translatedSentence.length) {
        answer = 'incorrect'
      } else {
        for (let i = 0; i < createdSentence.length; i++) {
          if (createdSentence[i][1] !== translatedSentence[i]) {
            // if a word from createdSentence is not equal to a word in translatedSentence the answer is wrong
            answer = 'incorrect'
            break
          }          
        }
      }
      
      return {
        ...sentenceState,
        answer: answer,
        complete: true
      }    
    case 'remove-word':
      if (sentenceState.complete) return sentenceState
      // if the array of stored words is empty, we basically don't need to do anything
      if (sentenceState.storeClickedWord.length === 0)  {
        return sentenceState
      }

      const [removedWordKey, removedWordValue] = sentenceState.storeClickedWord[sentenceState.storeClickedWord.length - 1]
      const arrayWithoutRemovedWord = sentenceState.storeClickedWord.length > 0 
        ? [...sentenceState.storeClickedWord.slice(0, -1)]
        : []

      return {
        ...sentenceState,
        storeClickedWord: arrayWithoutRemovedWord,
        listOfWords: {
          ...sentenceState.listOfWords,
          [removedWordKey]: removedWordValue,
        }
      }
    default:
      throw new Error(`Unsupported action type`);
  }
}

type sentenceCacheProps = {
  [id: number]: sentenceState
}

const SentenceCacheContext = React.createContext(null)
SentenceCacheContext.displayName = 'SentenceCacheContext'

function SentenceCacheProvider(props) {
  const [state, setState] = React.useState<sentenceCacheProps>({})

  const value = [state, setState]

  return <SentenceCacheContext.Provider value={value} {...props} />
}

function useSentenceCache(): [sentenceCacheProps, React.Dispatch<React.SetStateAction<sentenceCacheProps>>]  {
  const context = React.useContext(SentenceCacheContext)

  if (!context) {
    throw new Error(`SentenceReducer must be rendered within the PlayerProvider`)
  }

  return context
}

type SentenceContextProps = [sentenceState, Dispatch<sentenceActions>];

const SentenceReducerContext = React.createContext<SentenceContextProps | null>(null)
SentenceReducerContext.displayName = 'SentenceReducerContext'

function SentenceReducerProvider(props) {
  const [data, dispatch] = React.useReducer(sentenceReducer, initialState)

  const value = [data, dispatch]

  return <SentenceReducerContext.Provider value={value} {...props} />
}

function useSentenceReducer(): SentenceContextProps {
  const [data, dispatch] = React.useContext(SentenceReducerContext)

  if (!data || !dispatch) {
    throw new Error(`SentenceReducer must be rendered within the PlayerProvider`)
  }

  return [data, dispatch]
}

export {
  SentenceReducerProvider,
  useSentenceReducer,
  initialState,
  SentenceCacheProvider,
  useSentenceCache
}