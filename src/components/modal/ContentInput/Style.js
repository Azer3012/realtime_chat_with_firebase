import { StyleSheet, Text, View,Dimensions } from 'react-native'


const deviceSize=Dimensions.get('window')
const styles = StyleSheet.create({
    modal:{

        justifyContent:'flex-end',
        margin: 0
    },
    container:{
        backgroundColor:'white',
        padding:10,
        margin: 10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height: deviceSize.height/3
    },
    inputContainer:{
        flex: 1
    },
    input:{
        borderBottomWidth:1,
        borderColor:'grey'
    }
})

export default styles;