import {
  useQuery,
  UseQueryResult
} from '@tanstack/react-query'
import axios from 'axios'

interface Languages {
  language_name: string;
  image: string;
}

interface LanguagesData {
  data: {
    id: number;
    acf: {
      language: string;
      languages: Languages[]
    }
  }[]
}

function useGetAvailableLanguages() {
  const result = useQuery<LanguagesData>({
    queryKey: ['available-languages'],
    queryFn: () => axios.get('https://andrew-dev.com/polyglot/wp-json/acf/v3/pages/')
      .then((res) => res)
    });
  
  return {...result};
}

export interface Words {
  possible_words: {
    word: string;
  }[];
  sentence_to_translate: string;
  translated_sentence: string;
}

export interface LanguageData {
  data: LanguageDataObject[];
}

export interface LanguageDataObject {
  id: number;
  acf: {
    topic_name: string;
    words: Words[];
  }
}

function useGetLanguageData(language) {
  const result = useQuery<LanguageData>({
    queryKey: [`language-${language}`],
    queryFn: () => axios.get(`https://andrew-dev.com/polyglot/wp-json/acf/v3/${language}`)
  })

  return {...result}
}

function linkify<T extends string>(str: T): T {
  if (str === null) return '' as T
  return str.toLowerCase().replaceAll(' ', '_') as T
}

export {useGetAvailableLanguages, useGetLanguageData, linkify}