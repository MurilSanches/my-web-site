import React from 'react';
import { render } from 'react-dom';
import RouteManager from './Routes';
import './css/index.css';
import './css/fonts.css';

const rootElement = document.getElementById("root");

render(<RouteManager />, rootElement);
