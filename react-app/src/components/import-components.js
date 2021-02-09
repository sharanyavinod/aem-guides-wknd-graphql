import { MapTo } from '@adobe/aem-react-editable-components';
import { Text, TextEditConfig } from './AEMText';
import Image, { ImageEditConfig } from './AEMImage';

MapTo('wknd-spa/components/text')(Text, TextEditConfig);
MapTo('wknd-spa/components/image')(Image, ImageEditConfig);
