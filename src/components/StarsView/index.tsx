import React, { } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { View } from 'react-native'
import { styles } from './styles';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/Entypo';
import { normalize } from 'screens/normalize';

function SearchBar(props: any) {
   
    return (
        <View style={styles.container}>
      <Stars
        default={props.stars}
        count={5}
        // half={true}
        starSize={20}
        disabled={true}  
        fullStar={<Icon name={'star'} color="#ffd700" size={normalize(20)}/>}
        emptyStar={<Icon name={'star-outlined'} color="#ffd700" size={normalize(20)}/>}
    />
        </View>
    );
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps, actions)(SearchBar);