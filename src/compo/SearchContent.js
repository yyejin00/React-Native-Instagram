import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const serachData = [
  {
    id: 0,

    images: [
      require('../../assets/images/post1.jpeg'),
      require('../../assets/images/post2.jpeg'),
      require('../../assets/images/post3.jpeg'),
      require('../../assets/images/post4.jpeg'),
      require('../../assets/images/post5.jpeg'),
      require('../../assets/images/post6.jpeg'),
    ],
  },
  {
    id: 1,

    images: [
      require('../../assets/images/post6.jpeg'),
      require('../../assets/images/post7.jpeg'),
      require('../../assets/images/post8.jpeg'),
      require('../../assets/images/post9.jpeg'),
      require('../../assets/images/post10.jpeg'),
      require('../../assets/images/post11.jpeg'),
    ],
  },
  {
    id: 2,

    images: [
      require('../../assets/images/post13.jpeg'),
      require('../../assets/images/post12.jpeg'),
      require('../../assets/images/post14.jpeg'),
    ],
  },
];

const SearchContent = props => {
  return (
    <View>
      {serachData.map((data, index) => {
        return (
          <View key={index}>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  flexWrap: 'wrap',
                  width: '100%',
                }}>
                {data.images.map((imageData, imageIndex) => {
                  return (
                    <TouchableOpacity
                      key={imageIndex}
                      style={{paddingBottom: 2, width: '33%'}}>
                      <Image
                        source={imageData}
                        style={{width: '100%', height: 120}}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {data.id === 1 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '66.5%',
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={{paddingBottom: 2, width: '49.5%'}}>
                        <Image
                          source={imageData}
                          style={{width: '100%', height: 120}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[5])}
                  onPressOut={() => props.data(null)}
                  style={{marginLeft: 2, width: '33%'}}>
                  <Image
                    source={data.images[5]}
                    style={{width: '100%', height: 250}}
                  />
                </TouchableOpacity>
              </View>
            ) : null}

            {data.id === 2 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[2])}
                  onPressOut={() => props.data(null)}
                  style={{paddingRight: 2, width: '66.5%'}}>
                  <Image
                    source={data.images[2]}
                    style={{width: '100%', height: 250}}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '33%',
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={{paddingBottom: 2, width: '100%'}}>
                        <Image
                          source={imageData}
                          style={{width: '100%', height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;
