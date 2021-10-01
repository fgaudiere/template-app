import React from 'react';
import {render} from 'react-dom';
import App from './AppCortX';
import Title from './Title';
import('../css/style.css');

render(
    <>
        <Title />
        <App />

    </>,
    document.querySelector('.appContainer')
);

console.log('Template React') 

