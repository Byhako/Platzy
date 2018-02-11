import React, { Component} from 'react';
import HomeLayout from '../componetes/home-layout';
import Categories from '../../categories/componentes/categories'
import Related from '../componetes/related';
import ModalContainer from '../../widgets/containers/modal-container';
import Modal from '../../widgets/componentes/modal';
import HandleError from '../../error/containers/handle-error';

class Home extends Component {
  state = {      //constructor
    modalVisible: false,
  }
  
  handleOpenModal = ()=>{
    this.setState({
      modalVisible: true,
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
          <Related/>
          <Categories
            categories={this.props.data.categories}
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalVisible &&  /*si se cumple, renderiza*/
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <h2>MODAL</h2>
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home;