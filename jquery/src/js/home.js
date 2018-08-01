// ---------------------------------
//          PROMESAS
// ---------------------------------
const getUserAll = new Promise(function(todoBien, todoMal) {
  // llamar a un api
  setTimeout(function() {
    // luego de 5 segundos
    todoBien('se acabó el tiempo 2')
  }, 2000)
})

const getUser = new Promise(function(todoBien, todoMal) {
  // llamar a un api
  setTimeout(function() {
    // luego de 3 segundos
    todoBien('se acabó el tiempo 1')
  }, 1000)
})

/*getUser
  .then(function() {
    console.log('todo está bien en la vida')
  })
  .catch(function(message) {
    console.log(message)
  })
*/

Promise.race([
  getUser,
  getUserAll,
])
.then(function(message) {
  console.log(message);
})
.catch(function(message) {
  console.log(message)
})
// .race ejecuta solo la primer que se cumple,
// .all ejecuta todas.

// ---------------------------------
//          AJAX
// ---------------------------------

// jquery
$.ajax('https://randomuser.me/api', {
  method: 'GET',
  success: function(data) { console.log('data ajax',data) },
  error: function(error)  { console.log(error) }
})


// vanila
fetch('https://randomuser.me/api')
  .then(function (response) {
    // console.log(response)
    return response.json()
  })
  .then(function (user) {
    console.log('user', user.results[0].name.first)
  })
  .catch(function() {
    console.log('algo falló')
  }); //  ; necesario o sale error, pues ejecuta lo siguiente como parte de esto


(async function load () {

  // ---------------------------------
  //          SELECTORES
  // ---------------------------------
  const $home = document.getElementById('home')
  const $modal = document.getElementById('modal')
  const $overlay = document.getElementById('overlay')
  const $hideModal = document.getElementById('hide-modal')

  const $actionContainer = document.querySelector('#action')
  const $dramaContainer = document.querySelector('#drama')
  const $animationContainer = document.querySelector('#animation')
  const $featuringContainer = document.querySelector('#featuring')
  const $homeFeaturing = document.querySelector('.home-featuring')

  const $form = document.querySelector('#form')

  const $modalTitle = $modal.querySelector('h1')
  const $modalImage = $modal.querySelector('img')
  const $modalDescription = $modal.querySelector('p')
  
  const BASE_API = 'https://yts.am/api/v2/list_movies.json?'

  function setAttributes (element, attributes) {
    for (const attribute in attributes) {
      element.setAttribute(attribute, attributes[attribute])
    }
  }

  async function getData(url) {
    const response = await fetch(url)
    const data = await response.json()
    if (data.data.movie_count > 0) {
      return data
    }
  }

  $form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const $featuring = document.querySelector('.featuring')

    $homeFeaturing.style.display = 'grid'
    $home.classList.add('search-active')

    $featuring.innerHTML = '<div></div>'

    const buscando = 'Buscando...'
    const $loader = document.createElement('img')
    setAttributes($loader, {
      src: 'src/images/loader.gif',
      height: 50,
      width: 50,
      class: 'imgLoader'
    })
    
    $featuring.append(buscando)
    $featuring.append($loader)

    const data = new FormData($form)

    try {
      // const peli = await getData(`${BASE_API}limit=1&query_term=${data.get('name')}`)
      // peli.data.movies[0]
      // DESESTRUCTURACION DE OBJETOS
      const { data: { movies: pelis 
        } } = await getData(`${BASE_API}limit=1&query_term=${data.get('name')}`)
      
      const HTMLString = featuringTemplate(pelis[0])
      $featuringContainer.innerHTML = HTMLString

    } catch (error) {
      alert('Pelicula no encontrada.')
      $loader.remove()
      $home.classList.remove('search-active')
    }

  })

  // ---------------------------------
  //          TEMPLATES
  // ---------------------------------

  function featuringTemplate (peli) {
    return (
      `
      <div class="featuring">
        <div class="featuring-image">
          <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
        </div>
        <div class="featuring-content">
          <p class="featuring-title">Pelicula encontrada</p>
          <p class="featuring-album">${peli.title}</p>
        </div>
      </div>
      `
    )
  }

  function videoItemTemplate(movie, category) {
    return (
      `<div class="primaryPlaylistItem" 
        data-id='${movie.id}' 
        data-category='${category}'
      >
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">${movie.title}</h4>
      </div>`
    )
  }

  function createTemplate (htmlString) {
    const html = document.implementation.createHTMLDocument()
    html.body.innerHTML = htmlString
    return html.body.children[0]
  }

  function renderMovieList (lista, container, category) {
    container.children[0].remove()  // borra loader antes de agregar peliculas

    lista.forEach((movie) => {
      const htmlString = videoItemTemplate(movie, category)
      const movieElement = createTemplate(htmlString)
      container.append(movieElement)
      const image = movieElement.querySelector('img')

      image.addEventListener('load', (event) => {
        event.srcElement.classList.add('fadeIn')
      })

      movieElement.addEventListener('click', () => {
        showModal(movieElement)
      })
    })
  }

  function findById (list, id) {
    return list.find( movie => movie.id === parseInt(id) )
  }

  function findMovie (id, category) {
    switch (category) {
      case 'action': { return findById(actionList, id) }
      case 'drama': { return findById(dramaList, id) }
      default: { return findById(animationList, id) }
    }
  }

  function showModal (elemento) {
    $overlay.classList.add('active')
    $modal.style.animation = 'modalIn 0.8s forwards'
    const id = elemento.dataset.id
    const category = elemento.dataset.category
    const data = findMovie(id, category)

    $modalTitle.textContent = data.title
    $modalImage.setAttribute('src', data.medium_cover_image)
    $modalDescription.textContent = data.description_full
  }

  $hideModal.addEventListener('click', () => {
    $modal.style.animation = 'modalOut 0.8s forwards'
    $overlay.classList.remove('active')
  })

  const {data: {movies: actionList}} = await getData(`${BASE_API}genre=action`)
  window.localStorage.setItem('actionList',JSON.stringify(actionList))
  console.log('action',actionList)
  renderMovieList(actionList, $actionContainer, 'action')

  const {data: {movies: dramaList}} = await getData(`${BASE_API}genre=drama`)
  window.localStorage.setItem('dramaList',JSON.stringify(dramaList))
  console.log('drama',dramaList)
  renderMovieList(dramaList, $dramaContainer, 'drama')
  
  const {data: {movies: animationList}} = await getData(`${BASE_API}genre=animation`)
  window.localStorage.setItem('animationList',JSON.stringify(animationList))
  console.log('animation',animationList)
  renderMovieList(animationList, $animationContainer, 'animation')

  /*
  let terrorList
  getData('https://yts.am/api/v2/list_movies.json?genre=horror')
    .then((res) => {
      console.log('terror',res)
      terrorList = res
    })
  */


})()

