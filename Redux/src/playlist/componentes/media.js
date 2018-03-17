import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css'


// Componente puro
class Media extends PureComponent{
  /*// convencion para Es6
    constructor(props){
    super(props);
    // Enlazar envento this del DOM con la clase.
    // this.handleClick = this.handleClick.bind(this);

    // estado
    this.state = {
      author: props.author
    }
    }*/

  // Con Es7 podemos usar solo arrow function, pues estas heredan
  // el contexto de su padre

  state = {
    author: this.props.author,
  }

  handleClick = event =>{
    this.props.openModal(this.props.id)
  }

  render(){
    return(
      <div className='Media' onClick={ this.handleClick } >
        <div className='Media-cover'>
          <img className='Media-image'
           src={this.props.cover}
           width={230}
           height={160}
          />
        </div>
        <h3 className='Media-title'> {this.props.title} </h3>
        <p className='Media-author'> {this.state.author}</p>
      </div>
    )
  }
}

// esto es para validar las propiedades que llegan a este archivo
// Pille que propTypes comienza aqui con minuscula pero dentro si con mayuscula
Media.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  cover: PropTypes.string.isRequired,
  type: PropTypes.oneOf( ['video', 'audio'] ),  // validando texto
}

Media.defaultProps = {
  title: 'Default title',
  author: 'Leonidas'
}

export default Media;
