import React from 'react';
import { withMappable } from '@adobe/aem-react-editable-components';

export const TextEditConfig = {
    emptyLabel: 'Text',
    isEmpty: function(props) {
        return !props || !props.text || props.text.trim().length < 1;
    },
    resourceType: 'wknd-spa/components/text'
};

export const Text = ({ cqPath, richText, text, tag }) => {
    const richTextContent = () => (
        <div className="aem_text"
            id={cqPath.substr(cqPath.lastIndexOf('/') + 1)}
            data-rte-editelement
            dangerouslySetInnerHTML={{__html: text}} />
    );

    const element = React.createElement(tag || 'div', { className: 'aem_text' }, text);

    return richText ? richTextContent() : element;
};

export const AEMText = withMappable(Text, TextEditConfig);
