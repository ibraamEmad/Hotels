
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Alert, View } from 'react-native'
import { styles } from './styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import getDirections from 'react-native-google-maps-directions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { normalize } from '../../screens/normalize'

function Map(props: any) {
  const [hotel, setHotel] = useState({
    name: '',
    location: { city: '', longitude: 0.0, latitude: 0.0 },
    userRating: null,
    gallery: [''],
    price: null,
    stars: 0,
    checkIn: { from: "", to: "" },
    checkOut: { from: "", to: "" },
    contact: { phoneNumber: "", email: "" }
  });

  useEffect(() => {
    setHotel(props.hotel)
  }, []);

    function handleGetDirections() {
        let data = {
    
          destination: {
            latitude: hotel.location.longitude,
            longitude: hotel.location.latitude
          },
          params: [
            {
              key: "travelmode",
              value: "driving"
            },
            {
              key: "dir_action",
              value: "navigate"
            }
          ],
    
        }
        getDirections(data)
      }

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: hotel.location.longitude,
                    longitude: hotel.location.latitude,
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.00421,
                }}
            >

                <MapView.Marker
                    coordinate={{
                        latitude: hotel.location.longitude,
                        longitude: hotel.location.latitude
                    }}
                    title={hotel.name}
                />
            </MapView>
            <Icon name={'directions'} color="#2767AD" style={styles.icon} size={normalize(40)} onPress={() => handleGetDirections()} />

        </View>
    );
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps, actions)(Map);