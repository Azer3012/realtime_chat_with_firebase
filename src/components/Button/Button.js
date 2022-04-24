import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Style';
const Button = ({text, onPress, loading, icon,theme="primary"}) => {
  return (
    <TouchableOpacity
    
    style={styles[theme].container}
    onPress={onPress}
    disabled={loading}
    
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <View style={styles[theme].btnContainer}>
          <Icon name={icon} color="white" size={18} />
          <Text style={styles[theme].btnText}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
