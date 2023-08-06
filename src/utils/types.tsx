import { LanguageDataObject, Words } from "utils/hooks";


type SentenceInitAction = {
  type: 'init';
  payload: sentenceState;
}

type sentenceUpdateAction = {
  type: 'update';
}

type sentenceCheckAction = {
  type: 'check'
}

type sentenceAddWordAction = {
  type: 'add-word';
  payload: {
    clickedWord: [string, string] | [];
  }
}

type sentenceClear = {
  type: 'clear';
}

type sentenceRemoveWord = {
  type: 'remove-word';
}

type sentenceResetData = {
  type: 'reset'
}

export type sentenceActions = 
  SentenceInitAction | 
  sentenceUpdateAction | 
  sentenceCheckAction |
  sentenceAddWordAction |
  sentenceClear |
  sentenceRemoveWord |
  sentenceResetData

export type sentenceState = {
  data: null | LanguageDataObject;
  sentence: Words | null;
  prevIndex: null | number;
  listOfWords: {[key: string]: string}[] | {};
  storeClickedWord: sentenceAddWordAction['payload']['clickedWord'][];
  answer?: 'correct' | 'incorrect' | 'await';
  complete?: boolean,
  teacherImage: string;
}