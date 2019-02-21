import React from "react";
import { View } from "react-native";

import styles from "./Styles/RecipeRowStyle";

export default class RecipeRow extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}></View>
                <View style={styles.infoContainer}></View>
            </View>
        )
    }

};
