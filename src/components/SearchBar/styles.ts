import { StyleSheet, Dimensions } from 'react-native'
import colors from '@palette';

const w = (Dimensions.get('window').width);

export const styles=StyleSheet.create({
    container:{
        borderRadius:10,
        borderColor:colors.secondary,
        borderWidth:2,
        paddingHorizontal:w*0.02,
        flexDirection:'row',
        width:w*0.75
    },
    search:{
        color:colors.secondary,
        height:w*0.09
    }

})