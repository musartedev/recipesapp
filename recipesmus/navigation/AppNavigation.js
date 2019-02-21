import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

import GenericScreen from "../containers/components/GenericScreen";
import ExploreScreen from "../containers/components/ExploreScreen";


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