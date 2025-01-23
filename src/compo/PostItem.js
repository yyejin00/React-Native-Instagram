import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';

const PostItem = ({data}) => {
  //좋아요를 눌렀을 때, 아이콘 변하게하기 위해 state 사용
  const [like, setLike] = useState(data.isLiked);
  return (
    <View
      style={{
        /*borderBottomWidth: 0.2,
        borderBottomColor: 'gray',*/
        paddingBottom: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={data.postPersonImage}
            style={{
              width: 35,
              height: 35,
              borderRadius: 100,
            }}
          />
        </View>
        <View
          style={{
            paddingLeft: 5,
          }}>
          <Text style={{fontSize: 13, fontWeight: 'bold', color: 'black'}}>
            {data.postTitle}
          </Text>
        </View>
        <Feather
          name="more-vertical"
          style={{
            fontSize: 25,
            color: 'gray',
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={data.postImage}
          style={{
            width: '100%',
            height: 400,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingVertical: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => setLike(prev => !prev)}>
            <AntDesign
              name={like ? 'heart' : 'hearto'}
              style={{
                paddingRight: 10,
                fontSize: 19,
                color: like ? 'red' : 'black',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLike(prev => !prev)}>
            <Ionic
              name="chatbox-outline"
              style={{
                paddingRight: 10,
                fontSize: 19,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather
              name="navigation"
              style={{
                paddingRight: 10,
                fontSize: 19,
              }}
            />
          </TouchableOpacity>
        </View>
        <Feather
          name="bookmark"
          style={{
            fontSize: 20,
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 15,
        }}>
        <Text>좋아요 {like ? data.likes + 1 : data.likes}개</Text>
        <Text>
          My heart is glowing, it's glowing up (glowing up) 너랑만 있으면 무서울
          게 없어 (glowing up) 가득 메워진, 다 메워진 (붉어진) My heart is
          glowing, it'd be glowing ('cause he!)
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={data.postPersonImage}
              style={{
                width: 20,
                height: 20,
                borderRadius: 100,
                backgroundColor: 'orange',
                marginRight: 10,
              }}
            />
            <TextInput placeholder="댓글달기.." style={{}} />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 12}}>게시</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
