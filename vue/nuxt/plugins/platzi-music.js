import trae from 'trae'
import configSerives from './config'

const platziMusicService = trae.create({
  baseUrl: configSerives.apiUrl
})

export default platziMusicService
