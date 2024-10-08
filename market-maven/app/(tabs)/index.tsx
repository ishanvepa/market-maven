import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewsCard from "@/components/NewsCard";
import NewsCardStack from "@/components/NewsCardStack";
import { useState, useEffect } from "react";
import apiConfig from '../../backend/api-config.json';

const apiUrl = apiConfig.api_url;

const Welcome = () => {
  const [symbolQuery, setSymbolQuery] = useState<string>('');

  useEffect(() => {
    fetch(apiUrl + '/get-symbol-query', { method :'GET' })
    .then(res => res.text())
    .then(data => {
      console.log(data);
      setSymbolQuery(data);
    })
    .catch(error => {
      console.log(error)
      setSymbolQuery(error)
    })
  },[]);
  
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <ScrollView contentContainerStyle={styles.scrollView}> */}
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{symbolQuery}</Text>
            <NewsCardStack />
          </View>
        </View>
      {/* </ScrollView> */}
      <StatusBar backgroundColor="#025da5" style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#2C4934',
    height: '100%',
  },
  scrollView: {
    height: '100%',
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 16,
  },
  textContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#8FBC9B',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#8FBC9B',
    marginTop: 28,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00aaff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 28,
    alignItems: 'center',
  },
  buttonText: {
    color: '#8FBC9B',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Welcome;