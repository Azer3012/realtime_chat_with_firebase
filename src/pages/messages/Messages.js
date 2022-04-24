import {StyleSheet, Text, View, SafeAreaView,FlatList} from 'react-native';
import React, {useState,useEffect} from 'react';

import styles from './Style';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import ContentInput from '../../components/modal/ContentInput/ContentInput';

import database from '@react-native-firebase/database';

import auth from '@react-native-firebase/auth';
import parseContentData from '../../utils/parseContentData';
import MessageCard from '../../components/MessageCard/MessageCard';
const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = useState(false);

  const [contentList,setContentList]=useState([])


  useEffect(()=>{
        database().ref('messages/').on('value',snapshot=>{
            const contentData=snapshot.val()

           

          const parsedData=  parseContentData(contentData || {})
            setContentList(parsedData)
        })
  },[])

  const handleInputModalToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const handleSendContent = content => {
    handleInputModalToggle();
    sendContent(content);
  };

  const sendContent = content => {
    const userMail = auth().currentUser.email;
    const contentObj = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
      dislike:0
    };

    database().ref('messages/').push(contentObj);
  };

  const handleDislike=(item)=>{
    database().ref(`messages/${item.id}/`).update({
        dislike:item.dislike+1
    });

  }

  const renderContent=({item})=><MessageCard item={item} onDislike={()=>handleDislike(item)}/>
  return (
    <SafeAreaView style={styles.container}>
      

      <FlatList
      
      data={contentList}
      renderItem={renderContent}
      keyExtractor={item=>item.id}
      />
      <FloatingButton icon="plus" onPress={handleInputModalToggle} />
      <ContentInput
        visible={inputModalVisible}
        onClose={handleInputModalToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default Messages;
