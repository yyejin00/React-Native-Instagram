import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import ProfileButton from '../compo/ProfileButton';
import ProfileBody from '../compo/ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo';

const Profile = () => {
  let circles = [];
  let numberOfCircles = 10;
  for (let index = 0; index < numberOfCircles; index++) {
    circles.push(
      <View key={index}>
        {index === 0 ? (
          <View style={styles.circleInnerView}>
            <Entypo name="plus" style={styles.entypo} />
          </View>
        ) : (
          <View style={styles.justcCircle}></View>
        )}
      </View>,
    );
  }

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.profileContainer}>
        <ProfileBody
          name="안예진"
          accountName="not_yejin"
          profileImage={require('../../assets/images/userProfile.jpeg')}
          followers="812"
          following="800"
          post="2"
        />
        <ProfileButton
          id={0}
          name="yejin"
          accountName="yejinnn"
          profileImage={require('../../assets/images/userProfile.jpeg')}
        />
        <View>
          <ScrollView
            horizontal={true}
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}>
            {circles}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  circleInnerView: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  justcCircle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: 'black',
    opacity: 0.1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  entypo: {fontSize: 30, color: 'black'},
  Container: {
    width: '100%',
    backgroundColor: 'white',
  },
  profileContainer: {
    width: '100%',
    padding: 10,
  },
  scrollView: {
    paddingVertical: 7,
  },
});

export default Profile;
