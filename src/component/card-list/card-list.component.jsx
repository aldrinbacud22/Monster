import React from 'react';
import './card-list.component.css';
import { Card } from '../card/card.component'
export const CardList = ({monster}) => (
        <div className = 'card-list'>
       {
           monster.map(mons => (
          <Card key = {mons.id} monster = {mons}/>

))}
       </div>

);