import { StyleSheet, Platform } from "react-native";
import { Colors, Metrics, Fonts } from "../../Theme/Index";

export default StyleSheet.create({
    container: {
        marginHorizontal: Metrics.baseSpace,
        marginBottom: Metrics.baseSpace,
        justifyContent: "flex-start",
        alignItems: "stretch",
    },
    imageContainer: {
    },
    infoContainer: {
        paddingVertical: Metrics.smallSpace,
        paddingHorizontal: Metrics.baseSpace,
        justifyContent: "center",
        alignItems: "center",
    }

});