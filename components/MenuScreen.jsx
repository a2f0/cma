import * as React from 'react';
import { Container, Footer, Text, Body } from 'native-base';
import { Dimensions, Image, StyleSheet, View, TouchableHighlight, ScrollView, StatusBar} from 'react-native';
import appStyle from '../styles/appStyle';

export default class MenuScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        headerLeft: () => null
      };
    };

    render() {
      return (
        <Container>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <Body style={[appStyle.fullwidth, appStyle.blackbackground ]  }>

          <View style={appStyle.flexcontainer}>
              <Image
                style={appStyle.menuheaderimage}
                source={require('../img/cma-text-logo.png')}
                resizeMode = 'cover'
              />
              <Text
                style={[appStyle.white, appStyle.menutext] }
                onPress={() => this.props.navigation.navigate('GeneralInformation')}>
                  General Information
              </Text>
              <Text
                style={[appStyle.white, appStyle.menutext] }
                onPress={() => this.props.navigation.navigate('LocationFinder')}>
                  Find a Location
              </Text>
          </View>

          </Body>
        <Footer style={[  appStyle.blackbackground, appStyle.notopborder  ]} >
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') }>
              <Image
                style={appStyle.footerlogo}
                source={require('../img/cma-circle-logo.png')}
                resizeMode = 'cover'
              />
          </TouchableHighlight>
        </Footer>
        </Container>

      );
    }
  }
