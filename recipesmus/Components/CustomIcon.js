import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../Theme/Fonts/config.json'

const CustomIcon = createIconSetFromFontello(fontelloConfig, 'recipes');

export default CustomIcon;