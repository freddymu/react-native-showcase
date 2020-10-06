import React, {Component} from 'react';
import {Text, Image, View, Button, StyleSheet, PixelRatio} from 'react-native';
import ImagePicker from 'react-native-image-picker';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class ImagePickerDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: '',
      imageUri: '',
    };
    this.pickSomeImage = this.pickSomeImage.bind(this);
  }

  pickSomeImage() {
    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        //const source = {uri: response.uri};

        // You can also display the image using data:
        const source = {uri: 'data:image/jpeg;base64,' + response.data};

        this.setState({
          avatarSource: source,
          imageUri: response.uri,
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.avatarContainer}>
        <Button onPress={this.pickSomeImage} title="Pick some image" />
        {this.state.avatarSource ? (
          <Image source={this.state.avatarSource} style={styles.avatar} />
        ) : (
          <Text>No selected image.</Text>
        )}
        <Text>Image Path: {this.state.imageUri}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150,
  },
});

export default ImagePickerDemo;
