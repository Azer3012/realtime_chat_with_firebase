import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../styles/colors';


const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.green,
        borderRadius:10,
        marginTop:10,
        marginHorizontal:20
    },
    innerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 10
    },
    username:{
        color: 'white',
        fontStyle:'italic'
    },
    date:{
        color: 'white',
        fontStyle:'italic'
    },
    text:{
        color: 'white',
        padding: 10
    },
    footer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight:20,
        paddingBottom:20
    },
    dislikeContainer:{
        padding: 5,
        backgroundColor:'white',
        borderRadius:8,
        flexDirection:'row'
    },
    dislikeCountContainer:{
        marginRight:5
    },
    dislikeCountText:{},
    dislikeText:{
        fontSize:15
    }
})
export default styles;