/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from 'react';
import {Link} from 'react-router-dom';
// import useGraphQL from '../api/useGraphQL';
// import Error from './Error';
// import Loading from './Loading';
import './Adventures.scss';

import { ADVENTURELIST } from '../mocks/adventures'

function Adventures() {
    const { data } = ADVENTURELIST;
    return (
        <div className="adventures">
          <ul className="adventure-items">
            {
                //Iterate over the returned data items from the query
                data.adventureList.items.map((adventure, index) => {
                    return (
                        <AdventureItem key={index} {...adventure} />
                    );
                })
            }
            </ul>
        </div>
    );
}

// Render individual Adventure item
function AdventureItem(props) {
  const { _path } = props;
  return (
        <li className="adventure-item">
          <Link to={{
              pathname:`/adventures/${_path}`
          }}>
            <img className="adventure-item-image" src={require("../assets/" + props.adventurePrimaryImage._path)}
                 alt={props.adventureTitle} />
          </Link>
          <div className="adventure-item-length-price">
            <div className="adventure-item-length">{props.adventureTripLength}</div>
            <div className="adventure-item-price">{props.adventurePrice}</div>
          </div>
          <div className="adventure-item-title">{props.adventureTitle}</div>
      </li>
      );
}

export default Adventures;
