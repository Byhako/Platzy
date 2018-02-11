import React, { Component} from 'react';
import HomeLayout from '../componetes/home-layout';
import Categories from '../../categories/componentes/categories'

class Home extends Component {
  render(){
    return (
      <HomeLayout>
        <Categories categories={this.props.data.categories}/>
      </HomeLayout>
    )
  }
}

export default Home;