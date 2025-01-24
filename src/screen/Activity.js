import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import ActivityPrevious from '../compo/ActivityPrevious';
import ActivityRecommend from '../compo/ActivityRecommend';
import ActivityThisWeek from '../compo/ActivityThisWeek';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FriendsProfileData} from '../compo/FriendsProfileData';
const Activity = () => {
  return (
    <SafeAreaView style={styles.centerView}>
      <Text style={styles.textStyle}>활동</Text>
      <ScrollView style={styles.scrollView}>
        <ActivityThisWeek />
        <Text style={styles.textSmallStyle}>이전활동</Text>
        {FriendsProfileData.slice(3, 6).map((data, index) => (
          <ActivityPrevious data={data} key={index} />
        ))}

        <Text style={styles.textSmallStyle}>회원님을 위한 추천</Text>
        {FriendsProfileData.slice(6, 12).map((data, index) => (
          <ActivityRecommend data={data} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centerView: {
    width: '100%',
    backgroundColor: 'white',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
    borderBottomColor: '#DEDEDE',
    padding: 10,
  },
  scrollView: {
    margin: 10,
  },
  textSmallStyle: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
export default Activity;
