import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
  event.preventDefault();   //para evitar que el formulario recargue la pagina
  const data = new FormData($form);  // guardo los datos del formulario
  // obtener input de texto, usando el name='title' del <input>
  const title = data.get('title');
  console.log(title);
  store.dispatch({
    type:'add-song',
    payload:{
      //si key=valor, puedo solo poner key ES7
      title,
    },
  })
}

const reducer = function(state, action){
  switch (action.type){
    case 'add-song':
      return [...state, action.payload]
    default:
      return state;
  }
}

const initialState = [
  {'title':'Sabrina',},
  {'title':'Selene',},
  {'title':'Solomon',}
]

const store = createStore(
  reducer,
  initialState,
  //enhancer
  // https://github.com/zalmoxisus/redux-devtools-extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function render(){
  const $container = document.getElementById('playlist');
  const playlist = store.getState();
  $container.innerHTML = '';  // Borramos todo lo que hay dentro del contenedor
  playlist.forEach((item)=>{
    const template = document.createElement('p');
    template.textContent = item.title;
    $container.appendChild(template);
  })
}

render();

function handleChange(){
  render();
}

store.subscribe(handleChange);