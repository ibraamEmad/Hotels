import { StyleSheet, Dimensions } from 'react-native'
import colors from '@palette';
import { normalize } from '../../screens/normalize'

const w = (Dimensions.get('window').width);

export const styles=StyleSheet.create({
    container:{
        width:w*0.8,
        backgroundColor:colors.secondary,
        paddingVertical:w*0.05,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        alignSelf:'center',
        marginTop:w*0.05
    },
    txt:{
        color:colors.primary,
        fontSize:normalize(14),
    },
 
})