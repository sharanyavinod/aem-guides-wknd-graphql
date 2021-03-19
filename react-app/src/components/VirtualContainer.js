import React from 'react';
import { withMappable, ResponsiveGrid } from '@adobe/aem-react-editable-components';

export const ContainerEditConfig = {
    emptyLabel: 'Virtual Container',
    isEmpty: function(props) {
        return true;
    },
    resourceType: 'wcm/foundation/components/responsivegrid'
};

// export const Container = ({ cqPath, richText, text }) => {
//     const richTextContent = () => (
//         <div id={cqPath.substr(cqPath.lastIndexOf('/') + 1)}
//             data-rte-editelement
//             dangerouslySetInnerHTML={{__html: text}} />
//     );
//     return richText ? richTextContent() : (<div className="aem_text">{text}</div>);
// };

export const VirtualContainer = withMappable(ResponsiveGrid, ContainerEditConfig);
