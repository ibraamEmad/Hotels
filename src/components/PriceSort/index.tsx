
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { TouchableOpacity } from 'react-native'
import { styles } from './styles';
import colors from '@palette';
import Icon from 'react-native-vector-icons/Entypo';
import { normalize } from '../../screens/normalize'

function PriceSort(props: any) {
    


    useEffect(() => {

    }, [])


    return (
        <TouchableOpacity style={styles.container} onPress={()=>props.func(props.value)} activeOpacity={0.9}>
           {props.value==1?
           <Icon name={'arrow-long-down'} color={colors.secondary} style={{}} size={normalize(14)} />
           :props.value==2?
           <Icon name={'arrow-long-up'} color={colors.secondary} style={{}} size={normalize(14)} />
           :
           <Icon name={'select-arrows'} color={colors.secondary} style={{}} size={normalize(14)} />
        }
        </TouchableOpacity>
    );
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps, actions)(PriceSort);