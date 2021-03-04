import React from 'react';

import Adventures from './Adventures';
import AEMPage from './AEMPage';
import { AEMText } from './AEMText';

/***
 * Displays a grid of current adventures
 */
function Home() {
  return (
    <div className="Home">
      <h2>Current Adventures</h2>
      <Adventures />
      <AEMPage
        pagePath='/content/wknd-spa/home' />
      <AEMText
        pagePath='/content/wknd-spa/home'
        itemPath='text20'/>
    </div>
  );
}

export default Home;
