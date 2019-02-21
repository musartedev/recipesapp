import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Theme/Index';


export default StyleSheet.create({
    navBar: {
        marginTop: Metrics.statusBarHeight,
        height: Metrics.navBarHeight,
        backgroundColor: Colors.whiteFull,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        ...Fonts.style.recipeNameCard,
        fontWeight: "bold"
    },
});