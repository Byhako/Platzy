import React, { Component} from 'react';
import HomeLayout from '../componetes/home-layout';
import Categories from '../../categories/componentes/categories'
import Related from '../componetes/related';
import ModalContainer from '../../widgets/containers/modal-container';
import Modal from '../../widgets/componentes/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/container/video-players';

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
            categories={this.props.data.categories}
            handleOpenModal={this.handleOpenModal}
          />
          
          <Categories
            categories={this.props.data.categories}
            handleOpenModal={this.handleOpenModal}
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

export default Home;