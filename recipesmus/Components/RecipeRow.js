import React from "react";
import { View, Image } from "react-native";

import styles from "./Styles/RecipeRowStyle";

export default class RecipeRow extends React.Component {

    renderImage = () => {
        const { data } = this.props;
        const defaultImage = "https://1czrcoa0bj-flywheel.netdna-ssl.com/wp-content/uploads/2017/05/empty-plate-600x400.jpg"

        let imageURL = (data && data.photo) ? data.photo : defaultImage;
        console.log(imageURL);

        return <Image
            style={styles.recipeImage}
            source={{ uri: imageURL }}
            resizeMode="cover"
        />
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    {this.renderImage()}
                </View>
                <View style={styles.infoContainer}></View>
            </View>
        )
    }

};
