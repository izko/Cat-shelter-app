import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App.jsx';

  let kitties = [
     {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
     {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
     {category: "male", age: "2", likesKids: false, name: "Grumpy"},
     {category: "female", age: "1", likesKids: true, name: "Jude Paw"},
     {category: "female", age: "2", likesKids: false, name: "Lucifurr"},
     {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"},
     {category: "female", age: "21", likesKids: true, name: "Grandma Mandarina"},
     {category: "male", age: "3", likesKids: true, name: "Citrus"},
     {category: "female", age: "6", likesKids: false, name: "Madonna"},
     {category: "male", age: "3", likesKids: true, name: "Ronald Wiskey"},
     {category: "female", age: "2", likesKids: true, name: "Woodienna All"},
     {category: "male", age: "1", likesKids: true, name: "Meowly Cyrus"},
     {category: "female", age: "9", likesKids: false, name: "Ann Ey"},
     {category: "male", age: "4", likesKids: true, name: "Jon Smeooow"},
    ];

document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <App kitties = {kitties}/>,
        document.getElementById('app')
    );
});
