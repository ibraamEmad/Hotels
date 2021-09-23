
import React, { } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { styles } from './styles';
import { Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image'
const w = (Dimensions.get('window').width);

function CarouselComponent(props: any) {

    function _renderItem({ item }) {
        return (
            <FastImage source={{ uri: item }} style={styles.img} resizeMode={FastImage.resizeMode.cover}
                onLoad={props.onload} />
        );
    }

    return (
        <Carousel
            data={props.gallery}
            renderItem={(item: string) => _renderItem(item)}
            sliderWidth={w}
            itemWidth={w * 0.88}
            inactiveSlideOpacity={0.5}
            inactiveSlideScale={1}
            loop={true}
        />
    );
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps, actions)(CarouselComponent);