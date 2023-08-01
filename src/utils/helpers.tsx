import type { LanguageData, LanguageDataObject } from "utils/hooks";

function getDataId(str: string): string {
  let arr = str.split('/')
  return arr[arr.length - 2]
}

function getCurrentTopicData(data: LanguageData, id: number): LanguageDataObject {
  return data.data.find(data => data.id === id)
}

function shuffle(array: string[]): string[] { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}

function getRandomInt(max: number, prevIdx?: number): number {
  
  // if we have an index we want to remove 1 from it
  if (prevIdx) max = max - 1
  let randomInt = Math.floor(Math.random() * max)
  // if randomInt is equal to what we had before, we add 1 to it. We can do it because we took 1 from our length before
  if (prevIdx && randomInt === prevIdx) randomInt++

  return randomInt
}

export {getDataId, getCurrentTopicData, shuffle, getRandomInt}