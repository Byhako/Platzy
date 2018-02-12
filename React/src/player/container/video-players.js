import React, { Component } from 'react';
import VideoPlayerLayout from '../componentes/video-player-layout';
import Video from '../componentes/video';
import Title from '../componentes/title';
import PlayPause from '../componentes/play-pause';
import Timer from '../componentes/timer';
import Controls from '../componentes/video-player-controls';
import ProgressBar from '../componentes/progress-bar';
import Spinner from '../componentes/spinner';
import Volumen from '../componentes/volume';
import FullScreen from '../componentes/full-screen';

class VideoPlayer extends Component{
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: 0,  // estado de la carga
    mute: false,
    valueVolume: 1,
  }
  
  // Cambia si esta en pausa y en play
  TogglePlay = event =>{
    this.setState({
      pause:!this.state.pause
    })
  }
  
  componentDidMount(){
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  //Cargamos la duracion total del video
  handleLoaderMetadata = event =>{
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  }

  //Para saber en que tiempo va el video
  handleTimeUpdate = event=>{
    //console.log(this.video.currentTime)
    this.setState({
      currentTime: this.video.currentTime
    })
  }

  // Actualzar el video al tiempo que indica la barra
  handleProgressChange = event=>{
    this.video.currentTime = event.target.value
  }

  // video comienza a cargar
  handleSeeking = event =>{
    this.setState({
      loading: true
    })
  }

  // video deja de cargar
  handleSeeked = event =>{
    this.setState({
      loading: false
    })
  }

  // Para controlar el volumen con la barrita
  handleVolumechange = event =>{
    this.video.volume = event.target.value;
    this.state.valueVolume = event.target.value;
  }

  //Para silenciar dando click sobre icono volumen
  handleMute = event=>{
    this.setState({
      mute: !this.state.mute
    })
    this.video.volume = this.state.mute
    this.state.valueVolume = this.state.mute ? 1 : 0
  }

  // Full-screen
  handleFullScreenClick = event=>{
    if(!document.webkitIsFullScreen){ // si no etoy en fullscreen
      this.player.webkitRequestFullscreen();
    }else{
      document.webkitExitFullscreen();
    }
  }

  // referenciando todo el reproductor
  setRef = element =>{
    this.player = element
  }

  render(){
    return(
      <VideoPlayerLayout setRef={this.setRef}>
        <Title title={this.props.title}/>

        <Controls>
          <PlayPause /*Mis botones*/
            handleClick={this.TogglePlay}
            pause={this.state.pause}
          />
          <Timer   /*Tiempo del video */
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volumen
            handleVolumechange={this.handleVolumechange}
            handleMute={this.handleMute}
            value={this.state.valueVolume}
          />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>
        
        <Spinner
          active={this.state.loading}
        />

        <Video
          handleLoaderMetadata={this.handleLoaderMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleSeeked={this.handleSeeked}
          handleSeeking={this.handleSeeking}
          src={this.props.src}
        />
      </VideoPlayerLayout> 
    )
  }
}


export default VideoPlayer;