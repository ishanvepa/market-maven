import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import {Animated, Dimensions, FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
const {width, height} = Dimensions.get("screen");
import apiConfig from '../backend/api-config.json';
import { router } from 'expo-router';
const apiUrl = apiConfig.api_url;
console.log(apiUrl);

const NewsCardStack = () => {
  const [newsCardData, setNewsCardData] = useState([]);


   //retrieve teams from football-api and store in teams 
   useEffect(() => {
    fetch(apiUrl + '/get-news', {
      method :'GET',
      headers : {'Content-Type':'application/json'}
      })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setNewsCardData(data);
    })
    .catch(error => {
      console.log(error)
      setNewsCardData(error)
    })
  },[]);

  return (
    //create flat list of newscards 
    <View style={styles.container}>
      <FlatList
        data={newsCardData}
        renderItem={({item}) =>
          <NewsCard item = {item} />        
        }         
      
      />
      
      
      {/* <NewsCard />
      <NewsCard />
      <NewsCard /> */}
    </View>
  )
}

export default NewsCardStack

const styles = StyleSheet.create({
  container: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
