import {View, Text, ScrollView, StatusBar, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '../compo/SearchInput';
import SearchContent from '../compo/SearchContent';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Dimensions} from 'react-native';

const Search = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [image, setImage] = useState(null);
  const getData = img => {
    setImage(img);
  };
  return (
    <SafeAreaView
      style={{
        width: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchInput />
        <SearchContent getData={getData} />
      </ScrollView>
      {image ? (
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',

            backgroundColor: 'rgba(52,52,52,0.8)',
          }}>
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              width: '90%',
              height: 440,
              top: windowHeight / 10,
              left: windowWidth / 20,
              borderRadius: 15,
              zIndex: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Image
                source={image}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
              />
              <View style={{paddingLeft: 8}}>
                <Text style={{fontSize: 12, fontWeight: '600'}}>
                  친구아이디
                </Text>
              </View>
            </View>
            <Image source={image} style={{width: '100%', height: '80%'}} />
            <View
              style={{
                justifyContent: 'space-around',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
              }}>
              <Ionic name="heart-outline" style={{fontSize: 26}} />
              <Ionic name="person-circle-outline" style={{fontSize: 26}} />
              <Feather name="navigation" style={{fontSize: 26}} />
            </View>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Search;
