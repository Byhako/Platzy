// export const getData = (url) => {
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         console.log('Error in request:', response) 
//         return false
//       } 
//       return response.json()
//     })
//     .then(data => {
//       if (data) {
//         return data
//       }
//     })
//     .catch(err => console.error('Error in response:', err))
// }

import axios from 'axios'

export const getData = (url) => {
  return axios.get(url)
    .then(({ data }) => {
        return data
    })
}