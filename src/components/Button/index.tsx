
import React, { } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { TouchableOpacity, Text } from 'react-native'
import { styles } from './styles';

function Button(props: any) {


    return (
        <TouchableOpacity style={styles.container} >
            <Text style={styles.txt}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps, actions)(Button);