import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
  event.preventDefault();   //para evitar que el formulario recargue la pagina
  const data = new FormData($form);  // guardo los datos del formulario
  // obtener input de texto, usando el name='title' del <input>
  const title = data.get('title');
  console.log(title);
}

const initialState = [
  {'title':'Sabrina',},
  {'title':'Sabrina',},
  {'title':'Solomon',}
]

const store = createStore(
  //reducer
  (state)=>(state),

  //initialState
  initialState,

  //enhancer
  // https://github.com/zalmoxisus/redux-devtools-extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)