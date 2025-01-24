import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const ProfileButton = ({id, name, accountName, profileImage}) => {
  const navigation = useNavigation();
  const [follow, setFollow] = useState(follow);
  const following = follow ? styles.followingTrue : styles.followingFalse;
  const followingText = follow
    ? styles.followingTextTrue
    : styles.followingTextFalse;

  return (
    <>
      {id === 0 ? ( //여기서 id가 0일때라는 말은, data를 만들 때 0번째 아이디를 '나'라고 임의로 지정해둔거라서 0이라고 한거임~
        <View style={styles.myAccountContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.push('EditProfile', {
                name: name,
                accountName: accountName,
                profileImage: profileImage,
              })
            }
            style={styles.profileEditContainer}>
            <View style={styles.profileEditView}>
              <Text style={styles.profileEditText}>프로필 수정</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.falseContainer}>
          <TouchableOpacity
            onPress={() => setFollow(!follow)}
            style={styles.buttonContainer}>
            <View style={following}>
              <Text style={followingText}>{follow ? '팔로잉' : '팔로우'}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.messageButton}>
            <Text style={styles.messageText}>메시지</Text>
          </View>
          <View style={styles.downButton}>
            <Feather name="chevron-down" style={styles.feather} />
          </View>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  myAccountContainer: {paddingVertical: 5, paddingHorizontal: 10},
  profileEditContainer: {width: '100%'},
  profileEditView: {
    width: '100%',
    height: 35,
    borderRadius: 5,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileEditText: {
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
    opacity: 0.8,
  },
  falseContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonContainer: {width: '42%'},
  followingTrue: {
    width: '100%',
    height: 35,
    borderRadius: 5,
    backgroundColor: null,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followingFalse: {
    width: '100%',
    height: 35,
    borderRadius: 5,
    backgroundColor: '#3493D9',
    borderWidth: 0,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followingTextTrue: {color: 'black'},
  followingTextFalse: {color: 'white'},
  messageButton: {
    width: '42%',
    height: 35,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  downButton: {
    width: '10%',
    height: 35,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  feather: {fontSize: 20, color: 'black'},
});

export default ProfileButton;
