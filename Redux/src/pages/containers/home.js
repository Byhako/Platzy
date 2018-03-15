import React, { Component} from 'react';
import HomeLayout from '../componetes/home-layout';
import Categories from '../../categories/componentes/categories'
import Related from '../componetes/related';
import ModalContainer from '../../widgets/containers/modal-container';
import Modal from '../../widgets/componentes/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/container/video-players';
import { connect } from 'react-redux';
import { List as list } from 'immutable'

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
  let searchResults = list()
  const search = state.get('data').get('search')
  if(search) {
    const mediaList = state.get('data').get('entities').get('media')
    searchResults = mediaList.filter((item) => {
      return item.get('author').toLowerCase().includes(search.toLowerCase())
    }).toList()
  }
  return{
    categories: categories,
    search: searchResults
  }
}

// connect recibe un parametro que especifica que datos necesitamos
// y esos datos se obtienen desde el state
// connect(funcion que parsea datos)(componente)
export default connect(mapStateToProps)(Home);