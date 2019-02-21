import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

import GenericScreen from "../Containers/GenericScreen";
import ExploreScreen from "../Containers/ExploreScreen";


const TabNavigator = createBottomTabNavigator({
    Explore: { screen: ExploreScreen },
    Categories: { screen: GenericScreen },
    Favorites: { screen: GenericScreen }
},
    {
        headerMode: "none"
    }
);

const AppNavigator = createStackNavigator(
    {
        home: { screen: TabNavigator },
    }, {
        headerMode: "none"
    }
);


const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;