import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { TouchableOpacity, Text, View, ImageBackground } from 'react-native'
import { styles } from './styles';
import FastImage from 'react-native-fast-image';

function HotelCard(props: any) {
    const [hotel, setHotel] = useState(
        {
         name:'',
         location:{city:''},
         userRating:null,
         gallery:[''],
         price:null,
        },
        );


    useEffect(() => {
        setHotel(props.hotel)
    }, [])
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={() =>  props.nav.navigate('HotelDetails', { hotel: hotel }) }>

            {hotel.gallery.length>0?
            <FastImage source={{ uri: hotel.gallery[0]?hotel.gallery[0]: "image"}} style={styles.img} resizeMode={FastImage.resizeMode.cover}
                // onLoad={imageLoaded[index]}
                >
                <View style={styles.textContainer}>
                    <Text style={styles.txt2} numberOfLines={2}>{hotel.name}</Text>
                    <Text style={styles.txt3}>{hotel.location.city}</Text>
                </View>
                <View style={styles.priceContainer}>
                           <Text style={styles.price}>{hotel.price} €</Text>
                  </View>
            </FastImage>
            :
            <ImageBackground source={{ uri: "image"}} style={styles.img} resizeMode={"cover"}>
            <View style={styles.textContainer}>
                <Text style={styles.txt2} numberOfLines={2}>{hotel.name}</Text>
                <Text style={styles.txt3}>{hotel.location.city}</Text>
            </View>
            <View style={styles.priceContainer}>
                       <Text style={styles.price}>{hotel.price} €</Text>
              </View>
        </ImageBackground>
        }
        </TouchableOpacity>
    );
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps, actions)(HotelCard);