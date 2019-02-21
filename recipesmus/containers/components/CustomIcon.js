import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../../theme/fonts/config.json'

const CustomIcon = createIconSetFromFontello(fontelloConfig, 'recipes');

export default CustomIcon;