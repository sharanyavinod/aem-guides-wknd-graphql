import React from 'react';

import Adventures from './Adventures';
import ResponsiveGrid from './ResponsiveGrid';
import { VirtualContainer } from './VirtualContainer';

/***
 * Displays a grid of current adventures
 */
function Home() {
    const comps = ["/libs/wcm/foundation/components/responsivegrid", "/apps/mysitetest/components/image", "/apps/mysitetest/components/text"];
  return (
    <div className="Home">
      <h2>Current Adventures</h2>
      <ResponsiveGrid
          pagePath='/content/mysitetest/us/en/home'
          itemPath='root/responsivegrid' />
      <VirtualContainer
          pagePath='/content/mysitetest/us/en/home'
          itemPath='test'
          className='cq-Overlay cq-Overlay--component cq-draggable cq-droptarget'
          allowedComponents={comps} />
    </div>
  );
}

export default Home;
