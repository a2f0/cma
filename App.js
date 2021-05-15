import * as React from 'react';
import { Image, StyleSheet, View, TouchableHighlight, ScrollView, StatusBar} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Footer, Text, Body } from 'native-base';


import GeneralInformationScreen from './components/GeneralInformationScreen';
import LocationFinderScreen from './components/LocationFinderScreen';
import MenuScreen from './components/MenuScreen';
import LocationDetailScreen from './components/LocationDetailScreen';
import appStyle from './styles/appStyle';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={appStyle.flexcontainersplash}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Menu') }>
          <Image 
            style={appStyle.mainlogo} 
            source={require('./img/cma-circle-logo.png')}
            resizeMode = 'cover'
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  LocationFinder: LocationFinderScreen,
  Menu: MenuScreen,
  GeneralInformation: GeneralInformationScreen,
  LocationDetail: LocationDetailScreen
},{

  defaultNavigationOptions: {
    title: '',
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#4AAA51',
    headerTitleStyle: {},
    headerStyle: {
      backgroundColor: '#000',
      shadowColor: 'transparent'
    },
  }
}
);

export default createAppContainer(RootStack);



