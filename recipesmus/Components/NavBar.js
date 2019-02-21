import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import styles from './Styles/NavBarStyle';
// import CustomIcon from './CustomIcon';


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    leftButton = () => {
        const { leftButton } = this.props;
        if (leftButton) {
            return <Ionicons
                name="md-arrow-back"
                style={styles.favico}
            />;
        }
    };

    rightButton = () => {
        const { rightButton, favorite } = this.props;
        if (rightButton) {
            if (favorite) {
                return <Ionicons
                    name="md-heart"
                    style={[styles.favico, styles.favorite]}
                    onPress={this.pressFavorite}
                />
            }
            else
                return <Ionicons
                    name="md-heart"
                    style={styles.favico}
                    onPress={this.pressFavorite}
                />
        }

    };

    pressFavorite = () => {
        const { onPressFavorite } = this.props;
        if (typeof onPressFavorite === "function")
            onPressFavorite();
    }

    render() {
        const { text } = this.props;
        console.log(this.props);

        return (
            <View style={styles.navBar}>
                <TouchableOpacity
                    style={styles.leftContainer}
                    onPress={() => alert('back')}
                >
                    {this.leftButton()}
                </TouchableOpacity>
                <View style={styles.titleContainer} >
                    <Text style={styles.title}>{text}</Text>
                </View>
                <TouchableOpacity
                    style={styles.rightContainer}
                >
                    {this.rightButton()}
                </TouchableOpacity>

            </View>
        );
    }

};