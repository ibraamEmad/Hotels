import React, {} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Text, View, Dimensions } from 'react-native'
import { styles } from './styles';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
const w = (Dimensions.get('window').width);

function LoadingComponent(props: any) {

    return (
        <View style={styles.cardsContainer}>
        {[...Array(5)].map((e, i) => 
        <View style={styles.container} >

            <SkeletonContent
                containerStyle={[styles.img, { position: 'absolute' }]}
                isLoading={true}
                boneColor="#EAEDF0"
                highlightColor="white"
                layout={[
                    {
                        key: props.index, width: w * 0.9,
                        height: w * 0.4, borderRadius: 15
                    },
                ]}
            />
            <View  style={styles.img}>
                <View style={styles.textContainer}>
                    <Text style={styles.txt2} numberOfLines={2}></Text>
                    <Text style={styles.txt3}></Text>
                </View>
                
            </View>
         
        </View>
        )}
        </View>
    );
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps, actions)(LoadingComponent);