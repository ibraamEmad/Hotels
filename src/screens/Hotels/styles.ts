import { StyleSheet, Dimensions } from 'react-native'
import { normalize } from '../normalize'
import colors from '@palette';

const w = (Dimensions.get('window').width);

const pri=colors.primary

export const styles=StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:pri,
        alignItems:'center'
       },
    title:{
        fontSize:normalize(18),
        fontWeight:'bold',
        textAlign:'center',
        marginTop:w*0.14,
        marginBottom:w*0.1,
    },

})