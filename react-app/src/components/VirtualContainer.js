import React from 'react';
import { withMappable, ResponsiveGrid } from '@adobe/aem-react-editable-components';

export const ContainerEditConfig = {
    title: 'Virtual Container',
    resourceType: 'wcm/foundation/components/responsivegrid'
};

export const VirtualContainer = withMappable(ResponsiveGrid, ContainerEditConfig);
