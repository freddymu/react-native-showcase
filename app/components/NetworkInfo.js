import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

class NetworkInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      networkType: '',
      isConnected: false,
    };
  }
  componentDidMount() {
    NetInfo.fetch().then((state) => {
      this.setState({
        networkType: state.type,
        isConnected: state.isConnected,
        isInternetReachable: state.isInternetReachable,
        isWifiEnabled: state.isWifiEnabled,
        details: state.details,
      });
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
    });
  }
  render() {
    return (
      <ScrollView style={{padding: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Network Info</Text>
        <Text>Network Type: {this.state.networkType}</Text>
        <Text>Is Connected: {this.state.isConnected ? 'Yes' : 'No'}</Text>
        <Text>
          Is Internet Reachable: {this.state.isInternetReachable ? 'Yes' : 'No'}
        </Text>
        <Text>Is WiFi Enabled: {this.state.isWifiEnabled ? 'Yes' : 'No'}</Text>
      </ScrollView>
    );
  }
}

export default NetworkInfo;
