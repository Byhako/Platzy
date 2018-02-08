import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/componentes/media';

const app = document.getElementById('app');

render(<Media type="video"  author="Leonidas" image="./images/covers/responsive.jpg"/>, app);
