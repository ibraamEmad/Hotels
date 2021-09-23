import React, { useState, useEffect } from 'react';
import { normalize } from '../normalize'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Linking, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import StarsView from '@components/StarsView';
import { styles } from './styles';
import Button from '@components/Button';
import Map from '@components/Map';
import Carousel from '@components/Carousel';
import colors from '@palette';

const w = (Dimensions.get('window').width);

function hotelDetails(props: any) {
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
    setHotel(props.route.params.hotel)
  }, []);

  return (

    <View style={styles.container}>

      <Text style={styles.txt}>{hotel.name}</Text>

      <ScrollView style={styles.subContainer} contentContainerStyle={{ paddingBottom: w * 0.05 }} showsVerticalScrollIndicator={false}>

       <Carousel gallery={hotel.gallery}/>

        <View style={{ width: w * 0.9, alignSelf: 'center' }}>
          <View style={{ flexDirection: 'row', marginTop: w * 0.03, alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.location}>{hotel.location.city} </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <StarsView stars={hotel.stars} />
            </View>

          </View>

          <View style={styles.info}>
            <View style={styles.textContainer}>
              <View style={styles.textSubContainer}>
                <Text style={styles.checkText}>Check in:</Text>
              </View>
              <View style={styles.textSubContainer}>
                <Text style={styles.timeText}>{hotel.checkIn.from}-{hotel.checkIn.to}</Text>
              </View>
            </View>
            <View style={styles.textContainer}>
              <View style={styles.textSubContainer}>
                <Text style={styles.checkText}>Check out:</Text>
              </View>
              <View style={styles.textSubContainer}>
                <Text style={styles.timeText}>{hotel.checkOut.from}-{hotel.checkOut.to}</Text>
              </View>
            </View>

            <View style={styles.contactContainer}>
              <View style={styles.contact}>
                <Icon name={'phone'} color={colors.secondary} size={normalize(20)} />
                <TouchableOpacity onPress={() => Platform.OS !== 'android' ? Linking.openURL(`telprompt:${hotel.contact.phoneNumber}`) : Linking.openURL(`tel:${hotel.contact.phoneNumber}`)}>
                  <Text style={styles.clickableText}>{hotel.contact.phoneNumber}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.contact}>
                <Icon name={'mail'} color={colors.secondary} size={normalize(20)} />
                <TouchableOpacity onPress={() => Linking.openURL(`mailto:${hotel.contact.email}`)}>
                  <Text style={styles.clickableText}>{hotel.contact.email}</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>



          <Map hotel={hotel} />

          <Button text="Reserve" />

        </View>
      </ScrollView>
    </View>
  );
}

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, actions)(hotelDetails);