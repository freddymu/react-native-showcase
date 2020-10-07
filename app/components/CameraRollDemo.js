import React, {Component} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}

async function savePicture() {
  if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
    return;
  }

  //CameraRoll.save(tag, {type, album});
}

class CameraRollDemo extends Component {}
