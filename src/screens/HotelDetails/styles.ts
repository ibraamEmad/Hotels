import { StyleSheet, Dimensions } from 'react-native'
import colors from '@palette';
import { normalize } from '../../screens/normalize'

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export const styles=StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:colors.primary,
        alignItems:'center'
    },
    txt:{
        color:colors.secondary,
        fontSize:normalize(15),
        width:w*0.7,
        textAlign:'center'
    },
    subContainer:{
        width:w,
        marginTop:w*0.02,
    },
    location:{
        color:colors.secondary,
        fontSize:normalize(11),
        // fontFamily:'Anderson Grotesk Light Oblique',
    },
    description:{
        color:'black',
        fontSize:normalize(13),
        marginTop:w*0.03,
        // textAlign:'justify'
    },
    textContainer:{
        flexDirection:'row',
        width:w*0.5
    },
    textSubContainer:{
        flex:1
    },
    info:{
        marginTop:h*0.04
    },
    checkText:{
        color:'black',
        fontSize:normalize(14),
    },
    timeText:{
        color:'grey',
        fontSize:normalize(14),
    },
    contactContainer:{
        flexDirection:'row',
        width:w*0.9,
        marginTop:h*0.03
    },
    contact:{
        flex:1,
        alignItems:'center'
    },
    clickableText:{
        color:'#0645AD',
        fontSize:normalize(11),
        textDecorationLine:'underline',
        marginTop:h*0.01
    }

})