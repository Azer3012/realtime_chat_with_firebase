import { StyleSheet, Text, View } from 'react-native'
import colors from '../../styles/colors';



const baseStyle=StyleSheet.create({
    container:{
        marginHorizontal:20,
        height:40,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8

        
    },
    btnContainer:{
        flexDirection:'row',
        alignItems:'center',
        height: 40,
        
    },

    btnText:{
        color: 'white',
        fontSize:15
    }
})


const primary=StyleSheet.create({
    ...baseStyle,
    container:{
       ...baseStyle.container,
        backgroundColor:colors.green,
        

        
    },
   

    btnText:{
        ...baseStyle.btnText,
        color: 'white',
        
    }
})

const secondary = StyleSheet.create({
    ...baseStyle,
    container:{
       ...baseStyle.container,
        backgroundColor:'white',
        borderColor:colors.green,
        borderWidth:1

        
    },
   

    btnText:{
        ...baseStyle.btnText,
        color: colors.green,
      
    }
})
export default {primary,secondary};