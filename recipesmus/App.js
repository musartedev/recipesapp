import React from 'react';
import { Expo, Font } from 'expo';

import AppContainer from "./navigation/AppNavigation";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Montserrat': require('./assets/fonts/Montserrat-Black.otf'),
      'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.otf'),
      'recipes': require('./assets/fonts/recipes.ttf')
    });
    this.setState({ fontLoaded: true })
  };


  render() {
    const { fontLoaded } = this.state;
    return (
      fontLoaded ? (
        <AppContainer />
      ) : null
    );
  }
}
