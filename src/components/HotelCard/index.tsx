import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { TouchableOpacity, Text, View, Alert } from 'react-native'
import { styles } from './styles';
import FastImage from 'react-native-fast-image';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';


function Button(props: any) {
    const [hotel, setHotel] = useState(
        {name:'',
         location:{city:''},
         userRating:null,
         gallery:['']
        }
        );

  
    useEffect(() => {
      setHotel(props.hotel)
    }, [])
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={() =>  props.navigation.navigate('HotelDetails', { hotel: hotel }) }>

            {/* <SkeletonContent
                containerStyle={[styles.img, { position: 'absolute' }]}
                isLoading={loading[index] ? false : true}
                boneColor="#EAEDF0"
                highlightColor="white"
                layout={[
                    {
                        key: index, width: w * 0.9,
                        height: w * 0.4, borderRadius: 15
                    },
                ]}
            /> */}

            <FastImage source={{ uri: hotel.gallery[0] }} style={styles.img} resizeMode={FastImage.resizeMode.cover}
                // onLoad={imageLoaded[index]}
                >
                <View style={styles.textContainer}>
                    <Text style={styles.txt2} numberOfLines={2}>{hotel.name}</Text>
                    <Text style={styles.txt3}>{hotel.location.city}</Text>
                </View>
            </FastImage>
        </TouchableOpacity>
    );
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps, actions)(Button);