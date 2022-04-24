import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

import Modal from 'react-native-modal';
import styles from './Style';
import Button from '../../Button/Button';
const ContentInput = ({visible, onClose, onSend}) => {
  const [text, setText] = useState(null);

  const handleSend=()=>{
      if(!text){
          return
      }
      onSend(text)
      setText(null)
  }
  return (
    <Modal
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Create Note"
            style={styles.input}
            onChangeText={setText}
            multiline
          />
        </View>

        <Button text="Send" onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default ContentInput;
