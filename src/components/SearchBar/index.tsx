import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { View, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import colors from '@palette';
import Icon from 'react-native-vector-icons/AntDesign';
import { normalize } from '../../screens/normalize'

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height)

function SearchBar(props: any) {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(() => {

    }, [])


    return (
        <View style={styles.container}>
            <View style={{ flex: 6 }}>
                <TextInput
                    style={styles.search}
                    placeholder="Search"
                    placeholderTextColor={colors.secondary}
                    value={search}
                    onChangeText={(value) => { props.updateSearchFunction(value); setSearch(value) }}

                />
            </View>
            {search.length > 0 ?
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'flex-end', height: w * 0.09, flex: 1 }} onPress={() => { props.updateSearchFunction(''); setSearch('') }} activeOpacity={1.0}>
                    <Icon name={'close'} color="silver" style={{}} size={normalize(14)} onPress={() => { props.updateSearchFunction(''); setSearch('') }} />
                </TouchableOpacity>
                :
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                </View>
            }
        </View>
    );
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps, actions)(SearchBar);