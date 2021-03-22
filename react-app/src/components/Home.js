import React from 'react';
import { AEMImage } from './AEMImage';
import { AEMText } from './AEMText';
import ResponsiveGrid from './ResponsiveGrid';
import { VirtualContainer } from './VirtualContainer';
import './Home.scss';

/***
 * Displays a grid of current adventures
 */
function Home() {
  const comps = ["/libs/wcm/foundation/components/responsivegrid", "/apps/mysitetest/components/image", "/apps/mysitetest/components/text"];

  return (
    <div className="Home">
      <h2>AEM - wknd-spa/home</h2>
      <ResponsiveGrid
        pagePath='/content/wknd-spa/home'
        itemPath='root/responsivegrid' />
      <h2>AEM - only virtual container</h2>
      <ResponsiveGrid
        pagePath='/content/wknd-spa/home'
        itemPath='root/responsivegrid/test' />
      <h2>SPA</h2>
      <AEMText
        pagePath='/content/wknd-spa/home'
        itemPath='spa-text-01'
        tag='h3'
        text='The quick brown fox jumps over the lazy dog.'/>
      <AEMImage
        pagePath='/content/wknd-spa/home'
        itemPath='spa-img-01'
        height='400'
        src='/content/dam/wknd/en/activities/camping/camp-summer-night.jpg'/>
      <h2>Virtual container</h2>
      <VirtualContainer
        pagePath='/content/wknd-spa/home'
        itemPath='root/responsivegrid/test'
        className='cq-Overlay cq-Overlay--component cq-draggable cq-droptarget'
        allowedComponents={comps} />
      <h2>SPA Footer</h2>
    </div>
  );
}

export default Home;
