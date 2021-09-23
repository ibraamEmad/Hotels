import { StyleSheet, Dimensions } from 'react-native'

const w = (Dimensions.get('window').width);

export const styles=StyleSheet.create({
    img:{
        width:w*0.84,
        height:w*0.5,
        borderRadius:10,
        alignSelf:'center'
    },
})