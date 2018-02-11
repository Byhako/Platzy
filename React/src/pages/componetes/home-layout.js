import React from 'react';

function HomeLayout(props){
  return(
    <section>
      {props.children}
    </section>
  )
}

// children es lo que este dentro de la 
// etiqueta <HomeLayout> </HomeLayout>

export default HomeLayout;