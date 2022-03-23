import { StyleSheet,FlatList} from 'react-native'
import React,{useState,useEffect} from 'react'
import Screen from '../Components/Screen'
import Card from '../Components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../Components/AppText';
import AppButton from '../Components/Button';
import ActivityIndicator from '../Components/ActivityIndicator';
import useApi from '../Hooks/useApi';



export default function ListingScreen({navigation}) {

  const getListingsApi = useApi(listingsApi.getListings)
  
  useEffect(() => {
    getListingsApi.request();
  },[])

  
  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
    <Screen>
      {
        getListingsApi.error && <>
        <AppText>
          Couldn't retrive the listings.
        </AppText>
        <AppButton title="Retry" onPress={loadListings} />
        </>
      }
        <FlatList 
         data={getListingsApi.data}
         keyExtractor={listing => listing.id.toString()}
         renderItem={({item}) => 
            <Card 
              title={item.title}
              subtitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTINGS_DETAILS,item)}
            />
          }
        />
    </Screen>
    </>
  )
}

const styles = StyleSheet.create({
})