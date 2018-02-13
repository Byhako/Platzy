import React from 'react';
import './volume.css';
import Volume from '../../icons/componentes/volume';

function Volumen(props){
  return(
    <button className='Volume'>
      <div onClick={props.handleMute}>
        <Volume
          color="white"
          size={25}
        />
      </div>
      
      <div className="Volume-range">
        <input
          type='range'
          min={0}   /*minimo volumen */
          max={1}   /*maximo volumen */
          step={0.05}
          value={props.value}
          onChange={props.handleVolumechange}
        />
      </div>
    </button>
  )
}

export default Volumen;