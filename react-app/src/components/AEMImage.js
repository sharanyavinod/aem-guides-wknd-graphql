import React, {Component} from 'react';
import {withMappable,MapTo} from '@adobe/aem-react-editable-components';

const { REACT_APP_HOST_URI } = process.env;

export const ImageEditConfig = {

    emptyLabel: 'Image',

    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1;
    }
};

export default class Image extends Component {

    get content() {
        return <img
                className="Image-src"
                src={REACT_APP_HOST_URI + this.props.src}
                alt={this.props.alt}
                title={this.props.title ? this.props.title : this.props.alt} />;
    }

    render() {
        if(ImageEditConfig.isEmpty(this.props)) {
            return null;
        }

        return (
                <div className="Image">
                    {this.content}
                </div>
        );
    }
}

export const AEMImage = withMappable(Image, ImageEditConfig);

MapTo('wknd-spa/components/image')(Image, ImageEditConfig);
