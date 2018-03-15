import React, { Component} from 'react';
import HomeLayout from '../componetes/home-layout';
import Categories from '../../categories/componentes/categories'
import Related from '../componetes/related';
import ModalContainer from '../../widgets/containers/modal-container';
import Modal from '../../widgets/componentes/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/container/video-players';
import { connect } from 'react-redux';

class Home extends Component {
  state = {      //constructor
    modalVisible: false,
  }
  
  handleOpenModal = (media)=>{
    this.setState({
      modalVisible: true,
      media: media,
    })
  }

  handleCloseModal = (event)=>{
    this.setState({
      modalVisible: false,
    })
  }

  render(){
    return (
      <HandleError>
        <HomeLayout>
          <Related
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
          />
          
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
          />
          {
            this.state.modalVisible &&  /*si se cumple, renderiza*/
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <VideoPlayer
                  autoplay /*llega true como propiedad*/
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

function mapStateToProps(state, props){
  const categories = state.get('data').get('categories').map((categoryId) => {
    return state.get('data').get('entities').get('categories').get(categoryId)
  })
  return{
    categories: categories,
    search: state.get('data').get('search')
  }
}

// connect recibe un parametro que especifica que datos necesitamos
// y esos datos se obtienen desde el state
// connect(funcion que parsea datos)(componente)
export default connect(mapStateToProps)(Home);