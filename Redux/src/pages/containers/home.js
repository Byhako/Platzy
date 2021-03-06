import React, { Component} from 'react';
import HomeLayout from '../componetes/home-layout';
import Categories from '../../categories/componentes/categories'
import Related from '../componetes/related';
import ModalContainer from '../../widgets/containers/modal-container';
import Modal from '../../widgets/componentes/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/container/video-players';
import { connect } from 'react-redux'
import { List as list } from 'immutable'
// import { openModal, closeModal } from '../../actions/index'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'
class Home extends Component {
  
  handleOpenModal = (id)=>{
    this.props.actions.openModal(id)
  }

  handleCloseModal = (event)=>{
    this.props.actions.closeModal()
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
            this.props.modal.get('visibility') &&  /*si se cumple, renderiza*/
           <ModalContainer>
             {console.log('mediaId', this.props.modal.get('mediaId'))}
              <Modal handleClick={this.handleCloseModal}>
                <VideoPlayer
                  autoplay /*llega true como propiedad*/
                  id={this.props.modal.get('mediaId')}
                  // src={this.state.media.src}
                  // title={this.state.media.title}
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
    search: searchResults,
    modal: state.get('modal'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)