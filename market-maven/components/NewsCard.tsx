import React from 'react'
import PropTypes from 'prop-types'
import {Animated, Dimensions, FlatList, Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import LineDivider from './LineDivider';
import { router } from 'expo-router';
const {width, height} = Dimensions.get("screen");

//include props when api is implemented
const NewsCard = ({item}) => {
  return (
    <View style={styles.container}>
        <Pressable onPress={() => {Linking.openURL(item.url)}}>
            <Text style={styles.headline}>
                {item.title}
                {/* Buffet to Sell Berkshire Hathaway */}
            </Text>
            <Text style={styles.summary}>
                {item.text}
                {/* Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.... */}
            </Text>
            <Text style={styles.author}>
            {/* - Yahoo Finance */}
            {item.site}
            </Text>
        </Pressable>
        <View style={styles.separator} />
    </View>
  );
}

// NewsCard.propTypes = {}

export default NewsCard;

const styles = StyleSheet.create({
    separator:{
        backgroundColor: '#8FBC9B',
        height: 1,
        width: '82%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        opacity: 0.5,
    },

    headline:{
        color: '#8FBC9B',
        width,
        textAlign: 'left',
        fontWeight: 'bold',     
        paddingHorizontal: 30,
    },

    author: {
        color: '#8FBC9B',
        width,
        fontStyle: 'italic',
        textAlign: 'left', 
        paddingHorizontal: 30, 

    },

    summary: {
        color: '#8FBC9B',
        width,
        fontSize: 12,
        lineHeight: 13,
        paddingHorizontal: 30, 
        textAlign: 'left', 
    },

    container: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      },
  });
  