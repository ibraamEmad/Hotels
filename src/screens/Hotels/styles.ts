import { StyleSheet, Dimensions } from 'react-native'
import { normalize } from '../normalize'
import colors from '@palette';

const w = (Dimensions.get('window').width);


export const styles=StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:colors.primary,
        alignItems:'center'
       },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:w*0.9
    },
    title:{
        fontSize:normalize(18),
        fontWeight:'bold',
        textAlign:'center',
        marginTop:w*0.14,
        marginBottom:w*0.1,
    },
    list:{ 
        marginTop: w * 0.05,
        paddingBottom: w * 0.01,
        width: w * 0.9, 
    }
})