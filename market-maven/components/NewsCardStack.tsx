import React from 'react'
import NewsCard from './NewsCard'
import {Animated, Dimensions, FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
const {width, height} = Dimensions.get("screen");

function NewsCardStack() {
  return (
    //create flat list of newscards 
    <View style={styles.container}>
      <NewsCard />
      <NewsCard />
      <NewsCard />
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
