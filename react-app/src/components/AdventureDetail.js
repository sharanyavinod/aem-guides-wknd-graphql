/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from 'react';
import { withRouter, Link} from "react-router-dom";
import backIcon from '../images/icon-close.svg';
import './AdventureDetail.scss';
import { AEMText } from './AEMText';
import { ADVENTURE_ITEMS } from '../mocks/adventureItems';

function AdventureDetail(props) {

    let adventurePath = window.location.pathname;
    adventurePath = adventurePath.substring(adventurePath.lastIndexOf("/") + 1, adventurePath.length);
    adventurePath = adventurePath.replace(/(.html)/, '');

    const { data } = getAdventureByPath(adventurePath);

    //Set adventureData variable based on graphQL response
    let adventureData = data.adventureByPath.item;
    let pathname = adventurePath.substring(adventurePath.lastIndexOf("/") + 1, adventurePath.length);

    return (
        <div className="adventure-detail">
          <Link className="adventure-detail-close-button" to={"/"}>
            <img className="Backbutton-icon" src={backIcon} alt="Return" />
          </Link>
          <h1 className="adventure-detail-title">{adventureData.adventureTitle}</h1>

          <AEMText
            pagePath={`/content/wknd-spa/adventures/${pathname}`}
            itemPath='text20' />

          <div className="adventure-detail-info">
            <div className="adventure-detail-info-label">Activity</div>
            <div className="adventure-detail-info-description">{adventureData.adventureActivity}</div>
            <div className="adventure-detail-info-label">Type</div>
            <div className="adventure-detail-info-description">{adventureData.adventureType}</div>
            <div className="adventure-detail-info-label">Trip Length</div>
            <div className="adventure-detail-info-description">{adventureData.adventureTripLength}</div>
            <div className="adventure-detail-info-label">Group Size</div>
            <div className="adventure-detail-info-description">{adventureData.adventureGroupSize}</div>
            <div className="adventure-detail-info-label">Difficulty</div>
            <div className="adventure-detail-info-description">{adventureData.adventureDifficulty}</div>
            <div className="adventure-detail-info-label">Price</div>
            <div className="adventure-detail-info-description">{adventureData.adventurePrice}</div>
          </div>
          <div className="adventure-detail-content">
            <AdventureImage adventureData={adventureData} />
            <div dangerouslySetInnerHTML={{__html: adventureData.adventureDescription.html}}></div>
            <h2>Itinerary</h2>
            <hr />
            <div className="adventure-detail-itinerary"
                 dangerouslySetInnerHTML={{__html: adventureData.adventureItinerary.html}}></div>
            <Contributer {...adventureData.adventureContributor} />
          </div>

        </div>
    );
}

function Contributer(props) {

  if(!props) {
    return null;
  }
  let pictureReference = null;
  if(props.pictureReference) {
     pictureReference =  <img className="contributor-image" src={props.pictureReference._path} alt={props.fullName} />
  }

  return (
    <div className="contributor">
      <hr className="contributor-separator" />
      {pictureReference}
      <h3 className="contributor-name">{props.fullName}</h3>
      <h4 className="contributor-occupation">{props.occupation}</h4>
    </div>);
}

const getAdventureByPath = (adventurePath) => {
    return adventurePath && ADVENTURE_ITEMS[adventurePath];
};

const AdventureImage = ({ adventureData }) => (
    <img className="adventure-detail-primaryimage"
         src={require("../assets/" + adventureData.adventurePrimaryImage._path)} alt={adventureData.adventureTitle}/>
);

export default withRouter(AdventureDetail);
