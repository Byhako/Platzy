import React, { Component } from 'react';
import './video.css'

class Video extends Component{
  togglePlay(){
    if(this.props.pause){
      this.video.play()
    }else{
      this.video.pause()
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.pause != this.props.pause){
      this.togglePlay();
    }
  }

  setRef = element=>{
    this.video = element
  }

  render(){
    const {
      handleLoaderMetadata,
      handleTimeUpdate,
      handleSeeked,
      handleSeeking,
    } = this.props;

    return(
      <div className='Video'>
        <video
          ref={this.setRef}
          autoPlay={this.props.autoplay}
          src={this.props.src}
          onLoadedMetadata={handleLoaderMetadata} /*Carga metadatos, como la duracion */
          onTimeUpdate={handleTimeUpdate}         /*Tiempo para actualizar video */
          onSeeking={handleSeeking}               /*Video comienza a cargar */
          onSeeked={handleSeeked}                 /*Video deja de cargar */
        />
      </div>
    )
  }
}

export default Video;