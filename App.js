import * as React from 'react';
import { Dimensions, Image, StyleSheet, View, TouchableHighlight, ScrollView, StatusBar} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Footer, Text, Body } from 'native-base';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Locations from './locations.js'
import openMap from 'react-native-open-maps';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.flexcontainersplash}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Menu') }>
          <Image 
            style={styles.mainlogo} 
            source={require('./img/cma-circle-logo.png')}
            resizeMode = 'cover'
          />
        </TouchableHighlight>
      </View>
    );
  }
}

class MenuScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: () => null
    };
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Body style={[styles.fullwidth, styles.blackbackground ]  }>
        
        <View style={styles.flexcontainer}>
            <Image 
              style={styles.menuheaderimage} 
              source={require('./img/cma-text-logo.png')}
              resizeMode = 'cover'
            />
            <Text 
              style={[styles.white, styles.menutext] }
              onPress={() => this.props.navigation.navigate('GeneralInformation')}>
                General Information
            </Text>
            <Text 
              style={[styles.white, styles.menutext] }
              onPress={() => this.props.navigation.navigate('LocationFinder')}>
                Find a Location
            </Text>
        </View>
            
        </Body>
      <Footer style={[  styles.blackbackground, styles.notopborder  ]} >
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') }>
            <Image 
              style={styles.footerlogo} 
              source={require('./img/cma-circle-logo.png')}
              resizeMode = 'cover'
            />
        </TouchableHighlight>
      </Footer>
      </Container>
    
    );
  }
}

class GeneralInformationScreen extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Body style={styles.blackbackground}>
        <ScrollView> 
          <Text style={[styles.white, styles.headertext] }>General Information</Text>
          <Text style={[styles.white, styles.bodytext ]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              {'\n'}{'\n'}
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </Text>
        </ScrollView>
        </Body>
      <Footer style={[  styles.blackbackground, styles.notopborder  ]} >
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Menu') }>
            <Image 
              style={styles.footerlogo} 
              source={require('./img/cma-circle-logo.png')}
              resizeMode = 'cover'
            />
        </TouchableHighlight>
      </Footer>
      </Container>
    );
  }
}

class LocationDetailScreen extends React.Component {
  _goMap(location) {
    var query = location.field_latitude + "," + location.field_longitude
    openMap({ latitude: location.field_latitude, longitude: location.field_longitude, query: query });
    
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.flexcontainer}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Body style={styles.blackbackground}>
        <ScrollView>
          <Text style={[styles.white, styles.headertext] }>{ navigation.getParam('location').location_name }</Text>
          <Text style={[styles.white, styles.LocationDetail ]}  onPress={() => this._goMap(  navigation.getParam('location') )}  >
            Address: <Text style={[styles.LocationDetail, styles.cmagreen]}> { navigation.getParam('location').field_street_address } </Text>
          </Text>
          <Text style={[styles.white, styles.LocationDetail ]}>
            City: { navigation.getParam('location').field_city }
          </Text>
          <Text style={[styles.white, styles.LocationDetail ]}>
            State: { navigation.getParam('location').field_state }
          </Text>
          <Text style={[styles.white, styles.LocationDetail ]}>
            Zip Code: { navigation.getParam('location').field_zip_code }
          </Text>
        </ScrollView>
        </Body>
      <Footer style={[  styles.blackbackground, styles.notopborder  ]} >
        <TouchableHighlight onPress={() => this.props.navigation.goBack() }>
            <Image 
              style={styles.footerlogo} 
              source={require('./img/cma-circle-logo.png')}
              resizeMode = 'cover'
            />
        </TouchableHighlight>
      </Footer>
      </Container>
    );
  }
}


class LocationFinderScreen extends React.Component {

  markerClick(location){
    this.props.navigation.navigate('LocationDetail', {
      location: location
    })
  }

  render() {
    return (
      <Container>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Body style={[styles.fullwidth, styles.blackbackground] }>
        <View>
          <Text style={[styles.white, styles.headertext] }>Find A Location</Text>
          <MapView initialRegion={{
                    latitude: 40.748389,
                    longitude: -73.985780,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,}} 
          style={styles.mapStyle}
          provider={MapView.PROVIDER_GOOGLE}
          customMapStyle = { generatedMapStyle }>
          {Locations.locationList.map(location => (
            <Marker
              coordinate={{latitude: location.field_latitude, longitude: location.field_longitude}}
              pinColor="#4AAA51"
              key={ location.id }>
              <MapView.Callout tooltip style={styles.customView} onPress={() => this.markerClick( location  )}>
                  <View>
                    <Text style={styles.calloutText}>
                      {location.location_name}{"\n"}{location.field_street_address}
                    </Text>
                  </View>
              </MapView.Callout>
            </Marker>
          ))}
          </MapView>
        </View>
      </Body>
    <Footer style={[  styles.blackbackground, styles.notopborder  ]} >
      <TouchableHighlight onPress={() => this.props.navigation.navigate('Menu') }>
          <Image 
            style={styles.footerlogo} 
            source={require('./img/cma-circle-logo.png')}
            resizeMode = 'cover'
          />
      </TouchableHighlight>
    </Footer>
    </Container>
    )
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

var {width} = Dimensions.get('window');
var headerwidth = width * .8; // How wide we want the image
var coefficient = headerwidth / 1528 // 1528 is actually the width of the image.
var headerheight = coefficient * 500 // 500 is actually the height of the image.

const styles = StyleSheet.create({
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'},
  flexcontainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  flexcontainersplash: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  blackbackground: {
    backgroundColor: '#000',
  },
  redbackground: {
    backgroundColor: 'red',
  },
  white: {
    color: 'white',
  },
  mainlogo: {
    width: width * .7,
    height: width * .7,
    marginBottom: 50
  },
  menuheader: {
    borderWidth: 0,
    borderColor: 'red'

  },
  menuheaderimage: {
    width: headerwidth,
    height: headerheight,
    marginBottom: 40
  },
  footerlogo: {
    width: width * .15,
    height: width * .15,
  },
  nobottomborder: {
    borderBottomWidth: 0,
  },
  notopborder: {
    borderTopWidth: 0
  },
  headertext: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 15
  },
  menutext: {
    fontSize: 22,
    color: "#4AAA51",
    marginBottom: 15
  },
  contributingtext: {
    fontSize: 15,
    color: "#4AAA51",
    marginBottom: 15
  },
  bodytext: {
    marginLeft: 10,
    marginRight: 10
  },

  fullwidth: {
    width: '100%'
  },
  cmagreen: {
    color: "#4AAA51",
  },
  // Begin Maps
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  callout: {
  },
  calloutText: {
    color: 'white'
  },
  LocationDetail: {
    fontSize: 20, 
    color: 'white',
    textAlign: 'left',
    width: width
  }

  // End Maps

});



const generatedMapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]


    
