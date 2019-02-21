import React from 'react';
import { View } from 'react-native';

import NavBar from "./NavBar";

export default class ExploreScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {

        return (
            <View>
                <View>
                    <NavBar text="Explore"
                        rightButton={false}
                        leftButton={false}
                    />
                </View>
            </View>
        );
    }
}
