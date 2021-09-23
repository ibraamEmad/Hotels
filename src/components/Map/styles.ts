import { StyleSheet, Dimensions } from 'react-native'

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export const styles=StyleSheet.create({
    container:{ 
        width: w * 0.9,
        paddingVertical: w * 0.03,
        marginTop: h * 0.02
    },
    map:{
        width: w * 0.9,
        height: w * 0.35
    },
   icon:{
        position: 'absolute',
        top: w * 0.04,
        left: w * 0.01 
   }
 
})