import React from 'react';
import { Text, View } from 'react-native';

import NavBar from "../Components/NavBar";

export default class GenericScreen extends React.Component {

    static navigationOptions = {
        Title: "Home"
    };

    constructor(props) {
        super(props);
        this.state = {
            favorite: false,
        };
    };


    pressFavorite = () => {
        const { favorite } = this.state;
        this.setState({ favorite: !favorite });
    };


    render() {
        const { favorite } = this.state;

        return (
            <View>
                <View>
                    <NavBar text="Title"
                        rightButton="true"
                        leftButton="true"
                        onPressFavorite={this.pressFavorite}
                        favorite={favorite} />
                </View>
            </View>
        );
    }
}
