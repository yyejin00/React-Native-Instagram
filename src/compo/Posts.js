import {View, Text} from 'react-native';
import React from 'react';
import PostItem from './PostItem';
const postInfo = [
  {
    postTitle: 'Minji',
    postPersonImage: require('../../assets/images/userProfile.jpeg'),
    postImage: require('../../assets/images/post1.jpeg'),
    likes: 785,
    isLiked: true,
  },
  {
    postTitle: 'Dani',
    postPersonImage: require('../../assets/images/profile5.jpeg'),
    postImage: require('../../assets/images/post2.jpeg'),
    likes: 715,
    isLiked: false,
  },
  {
    postTitle: 'Hani',
    postPersonImage: require('../../assets/images/profile4.jpeg'),
    postImage: require('../../assets/images/post3.jpeg'),
    likes: 1185,
    isLiked: true,
  },
  {
    postTitle: 'Hearin',
    postPersonImage: require('../../assets/images/profile3.jpeg'),
    postImage: require('../../assets/images/post4.jpeg'),
    likes: 1115,
    isLiked: false,
  },
];
const Post = () => {
  return (
    <View>
      {postInfo.map((data, index) => {
        return <PostItem key={index} data={data} />;
      })}
    </View>
  );
};

export default Post;
