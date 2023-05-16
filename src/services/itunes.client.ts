const API_COUNT_PLACEHOLDER = '{count}'
const ITUNES_API_URL = `https://itunes.apple.com/us/rss/topalbums/limit=${API_COUNT_PLACEHOLDER}/json`

function getItunesUrl(count: number) {
  return ITUNES_API_URL.replace(API_COUNT_PLACEHOLDER, count + '')
}
export interface Music {
  name: string
}
export type MusicList = Music[]

function fetchN(count: number) {
  return (): Promise<Response> => fetch(getItunesUrl(count), {
    headers: {Accept: 'application/json'},
  })
}

export const fetch100 = fetchN(100)
export const fetch10 = fetchN(10)
