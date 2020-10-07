/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

class GeolocationDemo extends Component {
  watchID = null;

  constructor(props) {
    super(props);

    this.state = {
      showExamples: true,
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        const initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    this.watchID = Geolocation.watchPosition((position) => {
      const lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  }

  componentWillUnmount() {
    this.watchID != null && Geolocation.clearWatch(this.watchID);
  }

  render() {
    const example = {
      id: 'getCurrentPosition',
      title: 'Geolocation.getCurrentPosition',
      description: 'Asynchronously load and observe location',
    };

    return (
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <>
            <Text testID="examplesTitle" style={styles.sectionTitle}>
              Examples
            </Text>
            <View
              testID={`example-${example.id}`}
              key={example.title}
              style={styles.exampleContainer}>
              <Text style={styles.exampleTitle}>{example.title}</Text>
              <Text style={styles.exampleDescription}>
                {example.description}
              </Text>
              <View style={styles.exampleInnerContainer}>
                <View>
                  <Text>
                    <Text style={styles.title}>Initial position: </Text>
                    {this.state.initialPosition}
                  </Text>
                  <Text>
                    <Text style={styles.title}>Current position: </Text>
                    {this.state.lastPosition}
                  </Text>
                </View>
              </View>
            </View>
          </>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  sectionTitle: {
    fontSize: 24,
    marginHorizontal: 8,
    marginTop: 24,
  },
  exampleContainer: {
    padding: 16,
    marginVertical: 4,
    backgroundColor: '#FFF',
    borderColor: '#EEE',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  exampleTitle: {
    fontSize: 18,
  },
  exampleDescription: {
    color: '#333333',
    marginBottom: 16,
  },
  exampleInnerContainer: {
    borderColor: '#EEE',
    borderTopWidth: 1,
    paddingTop: 16,
  },
  title: {
    fontWeight: '500',
  },
});

export default GeolocationDemo;
