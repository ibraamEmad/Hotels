import { StyleSheet, Dimensions } from 'react-native'
import { normalize } from '../normalize'
import colors from '@palette';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export const styles=StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:colors.primary,
        alignItems:'flex-start',
        width:w,
        paddingHorizontal:w*0.04,
        paddingTop:h*0.3
    },
    title:{
        color:'#203152',
        fontSize:normalize(20),
    },
    body:{
        color:'black',
        fontSize:normalize(11),
        marginTop:w*0.03
    },
    btn:{
        width:w*0.9,
        backgroundColor:'#203152',
        paddingVertical:w*0.02,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginTop:w*0.04
    },
    txt4:{
        color:'white',
        fontSize:normalize(16),
    },
})