import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';

const Status = ({route, navigation}) => {
  const {name, image} = route.params;
  //value의 인수값을 직접 바꿔주면안됨 -> 왜?
  //ref객체의 current 속성은 지정된 인수로 초기화되며 컴포넌트 라이프사이클 주기동안 지속된다.
  const progress = useRef(new Animated.Value(0)).current;
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5], //5초동안 값을 유지하고
    outputRange: ['0%', '100%'], //5초동안 0~100퍼센트까지 도달하기
  });
  useEffect(() => {
    //5초뒤에 화면 이동인듯
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        height: '100%',
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          height: 3,
          width: '95%',
          borderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 18,
        }}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
          }}
        />
      </View>

      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 12,
          left: 0,
          width: '90%',
        }}>
        <View
          style={{
            width: 30,
            heigth: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={image}
            style={{
              borderRadius: 100,
              backgroundColor: 'orange',
              width: '100%',
              height: '100%',
              resizeMode: 'cover', //////////////✨✨✨✨✨
            }}></Image>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              paddingLeft: 10,
            }}>
            {name}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic
              name="close"
              style={{
                fontSize: 15,
                color: 'white',
                opacity: 0.6,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={image}
        style={{
          position: 'absolute',
          width: '100%',
          height: 400,
        }}
      />
    </SafeAreaView>
  );
};

export default Status;
