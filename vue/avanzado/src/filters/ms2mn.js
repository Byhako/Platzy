const msTomn = {}

msTomn.install = function (Vue) {
  Vue.filter('ms-to-mn', (val) => {
    const min = Math.floor(val / 60000)
    const sec = ((val % 60000 / 1000).toFixed(0))
    return min + ':' + ((sec < 10) ? '0' + sec : sec) + ' min'
  })
}

export default msTomn
