/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');
var cssVar = require('cssVar');
var {
AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  PixelRatio
} = React;


//import React, {
//  AppRegistry,
//  Component,
//  StyleSheet,
//  Text,
//  View,
//  Navigator
//} from 'react-native';
//
//var React = require('react-native');
//var SearchPage = require('./SearchPage');
//tm_testcomment



//class HelloWorld extends Component {
//  render() {
//    return <Text style={styles.text}>Hello World (Again)</Text>;
//  }
//}

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
//    if (index === 0) {
//      return null;
//    }
//    return (
//      <TouchableOpacity
//        onPress={() => navigator.push(newRandomRoute())}
//        style={styles.navBarRightButton}>
//        <Text style={[styles.navBarText, styles.navBarButtonText]}>
//          Next
//        </Text>
//      </TouchableOpacity>
//    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  },

};

//      <Text style={[styles.navBarText, styles.navBarTitleText]}>
//        {route.title} [{index}]

class PropertyFinder extends Component {
 _renderScene(route, navigator) {
    var Component = route.component;
    return ( <Component {...route.props} navigator={navigator} route={route} />);
  }

  render() {
    return (
//      <Navigator style={styles.container}
//        initialRoute={{ title: 'Property Finder', component: HelloWorld }}/>

//       <Navigator initialRoute={{name: 'Property Finder', index: 0}}
//        renderScene={(route, navigator) => <SearchPage name={route.name} onForward={() => { var nextIndex = route.index + 1;
//        navigator.push({ name: 'Scene ' + nextIndex, index: nextIndex, }); }} onBack={() => { if (route.index > 0) { navigator.pop();
//       } }} /> } />

    <Navigator
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
          type: "right"
        }}
        renderScene={this._renderScene}
                navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
    );
  }
}

//        navigationBar={
//          <Navigator.NavigationBar
//            routeMapper={NavigationBarRouteMapper}
//            style={styles.navBar}
//          />
//        }

const styles = StyleSheet.create({
//  text: {
//    color: 'black',
//    backgroundColor: 'white',
//    fontSize: 30,
//    margin: 80
//  },
  container: {
    flex: 1
  },
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 14,
    marginVertical: 10,
    textAlign: 'right'
  },
  navBarTitleText: {
    //color: cssVar('fbui-bluegray-60'),
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
    //backgroundColor: 'blue'
  },
  navBarRightButton: {
    paddingRight: 10,
    //backgroundColor: 'yellow'

  },
  navBarButtonText: {
    color: cssVar('fbui-accent-blue'),
  }
//  scene: {
//    flex: 1,
//    paddingTop: 20,
//    backgroundColor: '#EAEAEA',
//  },
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
