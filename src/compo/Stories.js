import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
//Home에서 사용할 컴포넌트

const storyInfo = [
  {
    id: 1,
    name: '나의 스토리',
    image: require('../../assets/images/profile1.jpeg'),
  },
  {
    id: 2,
    name: 'ya!!',
    image: require('../../assets/images/profile2.jpeg'),
  },
  {
    id: 3,
    name: 'hihihi',
    image: require('../../assets/images/profile3.jpeg'),
  },
  {
    id: 4,
    name: 'oioioio',
    image: require('../../assets/images/profile4.jpeg'),
  },
  {
    id: 5,
    name: 'newjeanzfree',
    image: require('../../assets/images/profile5.jpeg'),
  },
];
const Stories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {name: data.name, image: data.image})
            }>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {data.id == 1 ? ( //플러스 파란버튼
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: '#405de6',
                      backgroundColor: 'white',
                      borderRadius: 100,
                      overflow: 'hidden',
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: '#c13584',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: 'orange',
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10,
                  opacity: (data.id = 0 ? 1 : 0.5),
                }}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
