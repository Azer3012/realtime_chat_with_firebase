import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Style'
import { formatDistance, parseISO } from 'date-fns'

const MessageCard = ({item,onDislike}) => {

const formatedDate=formatDistance(parseISO(item.date), new Date(), { addSuffix: true })
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.date}>{formatedDate}</Text>
      </View>

      <Text style={styles.text}>{item.text}</Text>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.dislikeContainer} onPress={onDislike}>
          {!!item.dislike && (
            <View style={styles.dislikeCountContainer}>
              <Text style={styles.dislikeCountText}>{item.dislike}</Text>
            </View>
          )}
          <Text style={styles.dislikeText}>Dislike</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default MessageCard

