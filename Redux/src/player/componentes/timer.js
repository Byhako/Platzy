import React from 'react';
import './timer.css';

function leftPad(num){
  const pad = '00';
  return pad.substr(0, pad.length - num.length) + num;
}

function formattedTime(secs){
  const minutos = parseInt(secs/60, 10);
  const segundos = parseInt(secs%60, 10);
  return `${minutos} : ${leftPad(segundos.toString())}`
}

function Timer(props){
  return(
    <div className='Timer'>
      <p>
        <span>{formattedTime(props.currentTime)} / {formattedTime(props.duration)}</span>
      </p>
    </div>
  )
}

export default Timer;