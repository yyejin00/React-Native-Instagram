import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const EditProfile = ({route, navigation}) => {
  const {name, accountName, profileImage} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cancelView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>취소</Text>
        </TouchableOpacity>
        <Text style={styles.editText}>프로필 수정</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.doneText}>완료</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileImageView}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.changeProfileText}>프로필 사진 바꾸기</Text>
      </View>
      <View style={styles.editView}>
        <View>
          <Text
            style={{
              opacity: 0.5,
            }}>
            이름
          </Text>
          <TextInput
            placeholder="이 름 "
            defaultValue={name}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 5}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            사용자 이름
          </Text>
          <TextInput
            placeholder="사 용 자  이 름 "
            defaultValue={accountName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 5}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            웹사이트
          </Text>
          <TextInput
            placeholder="웹 사 이 트 "
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 5}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            소개
          </Text>
          <TextInput
            placeholder="소 개 "
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
      </View>
      <View>
        <Text style={styles.settingText}>프로페셔널 계정으로 전환</Text>
        <Text style={styles.settingText}> 개인정보 설정</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
  cancelView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  editText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  doneText: {
    color: '#3493D9',
  },
  profileImageView: {
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {width: 80, height: 80, borderRadius: 100},
  changeProfileText: {color: '#3493D9', marginTop: 10},
  editView: {
    padding: 10,
  },
  settingText: {
    marginVertical: 5,
    color: '#3493D9',
  },
});

export default EditProfile;
