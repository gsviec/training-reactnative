import React, { Component } from 'react';
import {Text,Button, View , StyleSheet,TextInput} from 'react-native';
import {Input} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { StreamApp,FlatFeed,Activity,
    LikeButton,StatusUpdateForm
} from 'expo-activity-feed';

class App extends Component {
  state = {
    text : "this is our message on screen",
    todo: ""
  };
  CustomActivity = (props) => {
        return (
            <Activity
                {...props}
                Footer={
                    <LikeButton {...props} />
                }
            />
        );
    };
  addTodo = () => {
    this.setState({todo: this.state.text})
  };
  render() {
      return (
          <SafeAreaProvider>
              <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
                  <StreamApp
                      apiKey="5rqsbgqvqphs"
                      appId="40273"
                      token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY2U2ZGQwMTgtM2VmMi00MWJhLWJiZmItMjhlOWY3OTM2YmYwIn0.Grhw9Nofkl1AxZqTGsJKj5rW5ENT4S0-m7fM-L2Cmn0"
                  >
                      <FlatFeed Activity={this.CustomActivity} />
                      <StatusUpdateForm feedGroup="timeline" />
                  </StreamApp>
              </SafeAreaView>
          </SafeAreaProvider>
      );
    // return(
    //     <View style={styles.container}>
    //       <Text>Ol</Text>
    //       {/*<TextInput*/}
    //       {/*    style={{ height: 100, width:100, borderColor: 'gray', borderWidth: 1 }}*/}
    //       {/*    onChangeText={(text) => this.setState({text})}*/}
    //       {/*/>*/}
    //       <Input
    //           placeholder='Basic input'
    //           onChangeText={(text) => this.setState({text})}
    //       />
    //       <Button
    //           title="Add todo"
    //           onPress={this.addTodo}
    //       />
    //       <Text>{this.state.todo}</Text>
    //     </View>
    //
    // );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderColor: "green"
  }
});
