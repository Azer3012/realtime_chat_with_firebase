import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

import styles from './Style'
const Input = ({placeholder,value,onType,iconName,isSecure}) => {
  return (
    <View style={styles.container}>

      <TextInput
       style={styles.input} placeholder={placeholder}
       autoCapitalize="none"
       value={value}
       onChangeText={onType}
       secureTextEntry={isSecure}
       />

    </View>
  )
}

export default Input

