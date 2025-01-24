import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FriendItem = ({data, name}) => {
  const [isFollow, setIsFollow] = useState();
  const [close, setClose] = useState();
  const followButtonContainer = isFollow
    ? styles.followButtonContainerTrue
    : styles.followButtonContainerFalse;
  const followText = isFollow ? styles.followTextTrue : styles.followTextFalse;

  return (
    <View>
      {data.name === name || close ? null : (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => setClose(true)}
            style={styles.iconContainer}>
            <AntDesign name="close" style={styles.anticon} />
          </TouchableOpacity>
          <Image source={data.profileImage} style={styles.image} />
          <Text style={styles.friendNameText}>{data.name}</Text>
          <Text style={styles.accountText}>{data.accountName}</Text>
          <TouchableOpacity
            style={styles.followingContainer}
            onPress={() => {
              setIsFollow(!isFollow);
            }}>
            <View style={followButtonContainer}>
              <Text style={followText}>{isFollow ? '필로잉' : '팔로우'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 200,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    borderRadius: 2,
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  anticon: {
    fontSize: 20,
    color: 'black',
    opacity: 0.5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
    margin: 10,
  },
  friendNameText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  accountText: {
    fontSize: 12,
  },
  followingContainer: {
    width: '80%',
    paddingVertical: 10,
  },
  followButtonContainerTrue: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    backgroundColor: null,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followButtonContainerFalse: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    backgroundColor: '#3493D9',
    borderWidth: 0,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followTextTrue: {color: 'black'},
  followTextFalse: {color: 'white'},
});
export default FriendItem;
