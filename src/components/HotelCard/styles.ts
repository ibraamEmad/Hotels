import { StyleSheet, Dimensions } from 'react-native'
import colors from '@palette';
import { normalize } from '../../screens/normalize'

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export const styles=StyleSheet.create({
    container:{
        marginBottom:h*0.02
    },
    txt:{
        color:'#203152',
        fontSize:normalize(28),
        textAlign:'center'
    },
    img:{
        width:w*0.9,
        height:w*0.4,
        borderRadius:15,
        
        justifyContent:'flex-end'
    },
    textContainer:{
        backgroundColor:'rgba(255,255,255,0.8)',
        width:w*0.45,
        marginBottom:w*0.02,
        padding:w*0.02,
        borderTopRightRadius:10,
        borderBottomRightRadius:10
    },
    txt2:{
        color:'#203152',
        fontSize:normalize(17),
    },
    txt3:{
        color:'#7C8698',
        fontSize:normalize(11),
    },
    input:{
        width: w*0.75,
        borderWidth:2,
        borderRadius:10,
        borderColor:'#203152',
        marginVertical:w*0.05,
        paddingVertical:w*0.03,
        paddingHorizontal:w*0.02
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        width:w*0.9,
        justifyContent:'space-between'
    }

})