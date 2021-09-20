import React, { useState, useEffect } from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions';
import { View, FlatList, Dimensions } from 'react-native'
import { styles } from './styles';
import HotelCard from '@components/HotelCard'
const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

function Hotels(props:any) {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  if (props.hotels.length !== hotels.length){
    setHotels(props.hotels)
  };
  if (props.loading !== loading){
    setLoading(props.loading)
  };

  useEffect(() => {
    props.listHotels()
  }, [])

  return (
    <View style={styles.container} >
    <FlatList 
                showsVerticalScrollIndicator={false}
                extraData={hotels}
                data={hotels}
                style={{marginTop:w*0.05,paddingBottom:w*0.01,width:w*0.9,}}
                contentContainerStyle={{alignItems:'center'}}
                keyExtractor={(item:any) => item.id }
                // ListHeaderComponent={}
                renderItem={({ item }) =>
                  <HotelCard hotel={item} nav={props.navigation} />
              }
              />

    </View>
  );
}

const mapStateToProps = (state:any) => ({
  hotels: state.app.hotels,
  loading: state.app.loading,
})

export default connect(mapStateToProps, actions)(Hotels);