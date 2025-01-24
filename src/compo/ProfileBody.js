import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const ProfileBody = ({
  name,
  accountName,
  profileImage,
  post,
  followers,
  following,
}) => {
  return (
    <View>
      {accountName ? (
        <View style={stlyes.trueContainer}>
          <View style={stlyes.textContainer}>
            <Text style={stlyes.text}>{accountName}</Text>
            <Feather name="chevron-down" style={stlyes.feather} />
          </View>
          <View style={stlyes.menuContainer}>
            <Feather name="plus-square" style={stlyes.plusSuqre} />
            <Feather name="menu" style={stlyes.memu} />
          </View>
        </View>
      ) : null}
      <View style={stlyes.profilesContainer}>
        <View style={stlyes.profilesImageContainer}>
          <Image source={profileImage} style={stlyes.profileImage} />
          <Text stlye={stlyes.nameText}>{name}</Text>
        </View>
        <View style={stlyes.profilesView}>
          <Text style={stlyes.profilesText}>{post}</Text>
          <Text>게시물</Text>
        </View>
        <View style={stlyes.profilesView}>
          <Text style={stlyes.profilesText}>{followers}</Text>
          <Text>팔로워</Text>
        </View>
        <View style={stlyes.profilesView}>
          <Text style={stlyes.profilesText}>{following}</Text>
          <Text>팔로잉</Text>
        </View>
      </View>
    </View>
  );
};
const stlyes = StyleSheet.create({
  trueContainer: {
    paddingVertical: 5,
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {flexDirection: 'row', alignItems: 'center'},
  text: {fontSize: 18, fontWeight: 'bold'},
  feather: {
    fontSize: 20,
    color: 'black',
    paddingHorizontal: 5,
    opacity: 0.5,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusSuqre: {fontSize: 25, color: 'black', paddingHorizontal: 15},
  memu: {fontSize: 25, color: 'black'},
  profilesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  profilesImageContainer: {alignItems: 'center'},
  profileImage: {
    marginBottom: 10,
    resizeMode: 'cover',
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  nameText: {paddingVertical: 5, fontWeight: 'bold'},
  profilesView: {alignItems: 'center'},
  profilesText: {fontWeight: 'bold', fontSize: 18},
});

export default ProfileBody;
