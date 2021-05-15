import * as React from 'react';
import { Container, Footer, Text, Body } from 'native-base';
import { Dimensions, Image, StyleSheet, View, TouchableHighlight, ScrollView, StatusBar} from 'react-native';
import appStyle from '../styles/appStyle';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Locations from '../locations'
// import openMap from 'react-native-open-maps';
import mapStyle from '../styles/mapStyle';

export default class LocationFinderScreen extends React.Component {

    markerClick(location){
      this.props.navigation.navigate('LocationDetail', {
        location: location
      })
    }
  
    render() {
      return (
        <Container>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Body style={[appStyle.fullwidth, appStyle.blackbackground] }>
          <View>
            <Text style={[appStyle.white, appStyle.headertext] }>Find A Location</Text>
            <MapView initialRegion={{
                      latitude: 40.748389,
                      longitude: -73.985780,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,}} 
            style={appStyle.mapStyle}
            provider={MapView.PROVIDER_GOOGLE}
            customMapStyle = { mapStyle }>
            {Locations.locationList.map(location => (
              <Marker
                coordinate={{latitude: location.field_latitude, longitude: location.field_longitude}}
                pinColor="#4AAA51"
                key={ location.id }>
                <MapView.Callout tooltip style={appStyle.customView} onPress={() => this.markerClick( location  )}>
                    <View>
                      <Text style={appStyle.calloutText}>
                        {location.location_name}{"\n"}{location.field_street_address}
                      </Text>
                    </View>
                </MapView.Callout>
              </Marker>
            ))}
            </MapView>
          </View>
        </Body>
      <Footer style={[  appStyle.blackbackground, appStyle.notopborder  ]} >
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Menu') }>
            <Image 
              style={appStyle.footerlogo} 
              source={require('../img/cma-circle-logo.png')}
              resizeMode = 'cover'
            />
        </TouchableHighlight>
      </Footer>
      </Container>
      )
    }
  }