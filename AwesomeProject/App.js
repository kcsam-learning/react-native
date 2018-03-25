// Example 1
// import React, { Component } from 'react';
// import { Text, StyleSheet } from 'react-native';
//
// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <Text style={styles.content}>
//         Hello world!
//       </Text>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   content: {
//     fontSize: 20,
//     lineHeight: 500, // vertical alignment
//     textAlign: 'center' // horizontal alignment
//   },
// });
//
//
//Example 2 (props -> source)
//
// import React, { Component } from 'react';
// import { Image } from 'react-native';
//
// export default class Banana extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//
//     return (
//       <Image source={pic} style={{width: 193, height: 110}}/>
//     );
//   }
// }
//
// Example 3 (use props to pass params to components)
// import React, { Component } from 'react';
// import { Text, View, StyleSheet } from 'react-native';
//
// class Greeting extends Component {
//   render() {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }
//
// export default class LotsOfGreeting extends Component {
//   render() {
//     return (
//       <View style={styles.content}>
//         <Greeting name='Sam' />
//         <Greeting name='Frank' />
//         <Greeting name='Rui' />
//       </View>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   content: {
//     lineHeight: 500,
//     textAlign: 'center'
//   }
// })
//
// Example 4 (state)
// import React, { Component } from 'react';
// import { Text, View } from 'react-native';
//
// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isShowingText: true };
//
//     // Toggle the state every second
//     setInterval(() => {
//       this.setState((previousState) => {
//         return { isShowingText: !previousState.isShowingText };
//       });
//     }, 1000);
//   }
//
//   render() {
//     let display = this.state.isShowingText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }
//
// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='Blink blink' />
//         <Blink text='Lalalala song' />
//       </View>
//     );
//   }
// }
//
// Example 5 (style)
//
// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={styles.bigblue, styles.red}>bigblue then red</Text>
//         <Text style={styles.red, styles.bigblue}>red then bigblue</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   red: {
//     color: 'red'
//   },
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30
//   }
// });
//
// Example 6 (width and height: fixed)
//
// import React, { Component } from 'react';
// import { View } from 'react-native';
//
// export default class FixedDimensionBasics extends Component {
//   render() {
//     return (
//       <View>
//         <View style={ {width: 50, height: 50, backgroundColor: 'skyblue' } }/>
//         <View style={ {width: 100, height: 100, backgroundColor: 'powderblue' } }/>
//         <View style={ {width: 150, height: 150, backgroundColor: 'steelblue' } }/>
//       </View>
//     )
//   }
// }
// Example 7 (width and height: flex)
//
// import React, { Component } from 'react';
// import { View } from 'react-native';
//
// export default class FixedDimensionBasics extends Component {
//   render() {
//     return (
//       <View style={ { flex: 1 } }>
//         <View style={ { flex: 1, backgroundColor: 'skyblue' } }/>
//         <View style={ { flex: 2, backgroundColor: 'powderblue' } }/>
//         <View style={ { flex: 3, backgroundColor: 'steelblue' } }/>
//       </View>
//     )
//   }
// }
// Example 8 (flex direction, default is column)
// justifyContent is for primary axis (in this case is row)
// alignItems is for secondary axis (in this case is column)
// import React, { Component } from 'react';
// import { View } from 'react-native';
//
// export default class FlexDirectionBasics extends Component {
//   render() {
//     return (
//       <View style={{
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'stretch'
//       }}>
//         <View style={ { width: 90, height: 90, backgroundColor: 'powderblue' } }/>
//         <View style={ { width: 90, height: 90, backgroundColor: 'skyblue' } }/>
//         <View style={ { width: 90, height: 90, backgroundColor: 'steelblue' } }/>
//       </View>
//     )
//   }
// }
//
// Example 9 TextInput
//
// import React, { Component } from 'react';
// import { Text, TextInput, View } from 'react-native';
//
// export default class PizzaTranslator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }
//
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <TextInput
//           placeholder='Type here to translate'
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Text>
//           { this.state.text.split('').map((word) => word && '🍕').join(' ') }
//         </Text>
//       </View>
//     );
//   }
// }
// Example 10 Touches
//
import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, TouchableHighlight, TouchableOpacity, Text } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('Lala button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title='Press me'
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title='alternative btn'
          />
        </View>
        {/* The view's background will be darkened when the user press*/}
        <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
          <View style={styles.button}>
            <Text>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        {/* Reducing the opacity of the button */}
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: 'pink'
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3'
  }
})
