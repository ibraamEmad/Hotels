import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { View, FlatList, Dimensions } from 'react-native'
import { styles } from './styles';
import HotelCard from '@components/HotelCard'
import SearchBar from '@components/SearchBar';
import LoadingComponent from '@components/LoadingComponent';
import PriceSort from '@components/PriceSort';


function Hotels(props: any) {
  const [hotels, setHotels] = useState([]);
  const [searchedHotels, setSearchedHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [priceSorting, setPriceSorting] = useState(0);

  if (props.hotels.length !== hotels.length) {
    setSearchedHotels(props.hotels)
    setHotels(props.hotels)
  };
  if (props.loading !== loading) {
    setLoading(props.loading)
  };

  useEffect(() => {
    props.listHotels()
  }, [])

  function updateSearch(txt: string) {
    console.log(txt)
    let newSearchedHotels = []
    for (let i = 0; i < hotels.length; i++) {
      if (hotels[i].name.includes(txt)) {
        newSearchedHotels.push(hotels[i])
      }
    }
    newSearchedHotels.filter((hotel: any) => hotel.name.includes(txt));

    setSearchedHotels(newSearchedHotels)
  }


  function sortByPrice(num: number) {
    let newSearchedHotels = [...hotels]
    if (num == 1) {
      newSearchedHotels.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))
      setPriceSorting(2)
    } else if (num == 2) {
      setPriceSorting(priceSorting + 1)
      setPriceSorting(0)
    } else {
      newSearchedHotels.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
      setPriceSorting(1)

    }
    setSearchedHotels(newSearchedHotels)
  }

  return (
    <View style={styles.container} >

      <View style={styles.header} >

        <SearchBar updateSearchFunction={updateSearch} />

        <PriceSort value={priceSorting} func={sortByPrice} />

      </View>

      {loading ?
        <LoadingComponent />
        :
        <FlatList
          showsVerticalScrollIndicator={false}
          extraData={searchedHotels}
          data={searchedHotels}
          style={styles.list}
          contentContainerStyle={{ alignItems: 'center' }}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item, index }) =>
            <HotelCard hotel={item} nav={props.navigation} index={index} />
          }
        />
      }

    </View>
  );
}

const mapStateToProps = (state: any) => ({
  hotels: state.app.hotels,
  loading: state.app.loading,
})

export default connect(mapStateToProps, actions)(Hotels);