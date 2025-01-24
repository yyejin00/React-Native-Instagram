import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const ActivityPrevious = ({data}) => {
  const navigation = useNavigation();
  const [follow, setFollow] = useState(data.follow);
  const followButtonContainer = follow
    ? styles.activityButtonContainerTrue
    : styles.activityButtonContainerFalse;
  const followButton = follow
    ? styles.followButtonTrue
    : styles.followButtonFalse;
  const followText = follow ? styles.followTextTrue : styles.followTextFalse;
  return (
    <View style={styles.container}>
      <View style={styles.secContainer}>
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
          style={styles.previousContainer}>
          <Image source={data.profileImage} style={styles.acitivityImage} />
          <Text style={styles.contents}>
            <Text style={styles.useNameContents}>{data.name}</Text>의 사 진 및
            동 영 상 을 보 려 면 팔 로 우 하 세 요
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFollow(!follow)}
          style={followButtonContainer}>
          <View style={followButton}>
            <Text style={followText}>{follow ? 'Following' : 'Follow'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  secContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
  },
  previousContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '64%',
  },
  acitivityImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 10,
  },
  contents: {
    fontSize: 15,
  },
  useNameContents: {
    fontWeight: 'bold',
  },
  activityButtonContainerTrue: {
    width: 72,
  },
  activityButtonContainerFalse: {
    width: 68,
  },

  followButtonTrue: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    backgroundColor: null,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followButtonFalse: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    backgroundColor: '#3493D9',
    borderWidth: 0,
    borderColor: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  followTextTrue: {
    color: 'black',
  },
  followTextFalse: {
    color: 'white',
  },
});
export default ActivityPrevious;
