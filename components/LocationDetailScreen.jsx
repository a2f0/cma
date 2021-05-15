import * as React from 'react';
import { Container, Footer, Text, Body } from 'native-base';
import { Dimensions, Image, StyleSheet, View, TouchableHighlight, ScrollView, StatusBar} from 'react-native';
import appStyle from '../styles/appStyle';

export default class LocationDetailScreen extends React.Component {
    _goMap(location) {
      var query = location.field_latitude + "," + location.field_longitude
      openMap({ latitude: location.field_latitude, longitude: location.field_longitude, query: query });

    }

    render() {
      const { navigation } = this.props;
      return (
        <Container style={appStyle.flexcontainer}>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <Body style={appStyle.blackbackground}>
          <ScrollView>
            <Text style={[appStyle.white, appStyle.headertext] }>{ navigation.getParam('location').location_name }</Text>
            <Text style={[appStyle.white, appStyle.LocationDetail ]}  onPress={() => this._goMap(  navigation.getParam('location') )}  >
              Address: <Text style={[appStyle.LocationDetail, appStyle.cmagreen]}> { navigation.getParam('location').field_street_address } </Text>
            </Text>
            <Text style={[appStyle.white, appStyle.LocationDetail ]}>
              City: { navigation.getParam('location').field_city }
            </Text>
            <Text style={[appStyle.white, appStyle.LocationDetail ]}>
              State: { navigation.getParam('location').field_state }
            </Text>
            <Text style={[appStyle.white, appStyle.LocationDetail ]}>
              Zip Code: { navigation.getParam('location').field_zip_code }
            </Text>
          </ScrollView>
          </Body>
        <Footer style={[  appStyle.blackbackground, appStyle.notopborder  ]} >
          <TouchableHighlight onPress={() => this.props.navigation.goBack() }>
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
