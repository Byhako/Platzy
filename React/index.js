import React from 'react';
import { render } from 'react-dom';
import Contenido from './src/playlist/componentes/contenido';

// Data
import data from './src/api.json';

const app = document.getElementById('app');

//render(<Media type="video"  author="Leonidas" image="./images/covers/responsive.jpg"/>, app);
render(<Contenido data={data}/>, app);