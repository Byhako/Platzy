import platziMusicService from './platzi-music'

const trackServices = { }

trackServices.search = function (q) {
  const type = 'track'
  return platziMusicService.get('/search', {
    params: {q, type}
  })
    .then(res => res.data)
}

export default trackServices
