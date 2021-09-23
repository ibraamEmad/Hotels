import { StyleSheet, Dimensions } from 'react-native'


const w = (Dimensions.get('window').width);

export const styles=StyleSheet.create({
    container : {
    backgroundColor:'silver',
    padding:w*0.02,
    borderRadius:10
    },
 
})