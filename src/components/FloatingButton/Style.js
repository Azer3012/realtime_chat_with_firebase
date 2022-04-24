import { StyleSheet, Text, View } from 'react-native'
import colors from '../../styles/colors';


const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderRadius:50,
        backgroundColor:colors.green,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default styles;