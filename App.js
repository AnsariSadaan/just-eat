// const heading = React.createElement('h1', {id: "heading", xyz: 'abc'}, "this is h1 tag from react");
// console.log(heading);
import React from 'react';
import ReactDOM  from 'react-dom/client';

const parent = 
        React.createElement('div', {id: "parent"}, 
        [React.createElement('div', { id: "child" },
        [React.createElement('h1', {}, "hello this is namaste react app"), 
        React.createElement('h1', {}, "i'm an h2 tag")]), 
        React.createElement('div', { id: "child2" },
        [React.createElement('h1', {}, "i'm h1 tag"), 
        React.createElement('h1', {}, "i'm an h2 tag")]),
        React.createElement('div', { id: "child3" },
        [React.createElement('h1', {}, "i'm h1 tag"), 
        React.createElement('h1', {}, "i'm an h2 tag")])])
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);