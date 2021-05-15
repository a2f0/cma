import { StyleSheet, Dimensions } from 'react-native';
var {width} = Dimensions.get('window');
const headerwidth = width * .8; // How wide we want the image
const coefficient = headerwidth / 1528 // 1528 is actually the width of the image.
const headerheight = coefficient * 500 // 500 is actually the height of the image.
const appStyle = StyleSheet.create({
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

export default appStyle;
