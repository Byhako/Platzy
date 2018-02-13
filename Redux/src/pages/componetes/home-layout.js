import React from 'react';
import './home-layout.css';

function HomeLayout(props){
  return(
    <section className="HomeLayout">
      {props.children}
    </section>
  )
}

// children es lo que este dentro de la 
// etiqueta <HomeLayout> </HomeLayout>

export default HomeLayout;