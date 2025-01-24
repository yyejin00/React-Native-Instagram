import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FriendsProfileData} from './FriendsProfileData';
const ActivityThisWeek = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.text}>이번주</Text>
      <View style={styles.centerView}>
        {FriendsProfileData.slice(0, 3).map((data, index) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.push('FriendProfile', {
                  name: data.name,
                  profileImage: data.profileImage,
                  follow: data.follow,
                  followers: data.followers,
                  following: data.following,
                  post: data.posts,
                })
              }
              key={index}>
              <Text>
                {data.name}
                {'   '}
              </Text>
            </TouchableOpacity>
          );
        })}
        <Text>님이 팔로우 하기 시작했습니다.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {fontWeight: 'bold'},
  centerView: {flexDirection: 'row', paddingVertical: '10'},
});
export default ActivityThisWeek;
