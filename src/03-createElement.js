import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(
    'h1', 
    {
        className : 'greeting'
    },
    'Hello, world! - createElement'
);

ReactDOM.render(
    element,
    document.getElementById('root')
);