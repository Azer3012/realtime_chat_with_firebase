import { StyleSheet, Text, View } from 'react-native'
import colors from '../../styles/colors';


const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    header:{
        color: colors.green,
        fontSize:30,
        textAlign:'center',
        paddingBottom:20,
        borderBottomWidth:1,
        borderColor:'grey'
    }
})

export default styles;