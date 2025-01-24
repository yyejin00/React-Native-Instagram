import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ActivityRecommend = ({data}) => {
  const navigation = useNavigation();
  const [follow, setFollow] = useState(data.follow);
  const [close, setClose] = useState(false);
  const followContainer = follow
    ? styles.followTrueContainer
    : styles.followFalseContainer;
  const followView = follow ? styles.followTrueView : styles.followFalseView;
  const followText = follow ? styles.followTrueText : styles.followFalseText;
  return (
    <View>
      {close ? null : (
        <View style={styles.container}>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.push('FriendProfile', {
                  name: data.name,
                  profileImage: data.profileImage,
                  follow: data.follow,
                  post: data.posts,
                  followers: data.followers,
                  following: data.following,
                })
              }
              style={styles.recommendContainer}>
              <Image source={data.profileImage} style={styles.recommendImage} />
              <View style={styles.recommendTextContainer}>
                <Text style={styles.recomName}>{data.name}</Text>
                <Text style={styles.recomAccountName}>{data.accountName}</Text>
                <Text style={styles.normalText}>회원님을 위한 추천</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.ifFollowContainer}>
            {follow ? (
              <TouchableOpacity
                onPress={() => setFollow(!follow)}
                style={followContainer}>
                <View style={followView}>
                  <Text style={followText}>
                    {follow ? 'following' : 'follow'}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity
                  onPress={() => setFollow(!follow)}
                  style={followContainer}>
                  <View style={followView}>
                    <Text style={followText}>
                      {follow ? 'following' : 'follow'}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setClose(true)}
                  style={styles.closeContainer}>
                  <AntDesign name="close" style={styles.antDesign} />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  recommendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '64%',
  },
  recommendImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 10,
  },
  recommendTextContainer: {width: '100%'},
  recomName: {fontSize: 14, fontWeight: 'bold'},
  recomAccountName: {fontSize: 12, opacity: 0.5},
  normalText: {fontSize: 12, opacity: 0.5},
  ifFollowContainer: {flexDirection: 'row', alignItems: 'center'},
  followTrueContainer: {width: 90},
  followFalseContainer: {width: 68},
  followTrueView: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    backgroundColor: null,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followFalseView: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    backgroundColor: '#3493D9',
    borderWidth: 0,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followTrueText: {color: 'black'},
  followFalseText: {color: 'white'},

  closeContainer: {paddingHorizontal: 10},
  antDesign: {fontSize: 14, color: 'black', opacity: 0.8},
});

export default ActivityRecommend;
