import React from 'react';


import './card.style.css'


export const Card = ({monster}) => (
    <div className ="card-container">
    
    <img src= {`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="Monster"/>

    <h1 key = {monster.id}>{monster.name}</h1>
    <p>{monster.email}</p>
    </div>
)