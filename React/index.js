import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/playlist/componentes/playlist';

// Data
import data from './src/api.json';

const app = document.getElementById('app');

//render(<Media type="video"  author="Leonidas" image="./images/covers/responsive.jpg"/>, app);
render(<Playlist data={data}/>, app);