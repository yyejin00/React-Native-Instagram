import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';
import ProfileBody from '../compo/ProfileBody';
import ProfileButton from '../compo/ProfileButton';
import FriendItem from '../compo/FriendItem';
import {FriendsProfileData} from '../compo/FriendsProfileData';

const FriendProfile = ({route, navigation}) => {
  const {name, profileImage, post, followers, following} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.topViewInner}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="arrow-back" style={styles.ionic} />
          </TouchableOpacity>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Feather name="more-vertical" style={styles.feather} />
          </View>
        </View>
        <ProfileBody
          name={name}
          profileImage={profileImage}
          post={post}
          followers={followers}
          following={following}
        />
        <ProfileButton id={1} />
        <Text style={styles.FriendRecommend}>회원님을 위한 추천</Text>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          style={styles.recommandScrollView}>
          {name === FriendsProfileData.name
            ? null
            : FriendsProfileData.map((data, index) => (
                <FriendItem key={index} data={data} name={name} />
              ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
  topView: {
    padding: 10,
  },
  topViewInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ionic: {
    fontSize: 20,
    color: 'black',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
  },
  nameText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  feather: {
    fontSize: 20,
    color: 'black',
  },
  FriendRecommend: {
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  recommandScrollView: {
    paddingTop: 10,
  },
});
export default FriendProfile;
