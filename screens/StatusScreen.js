// React/React Native imports
import { View, Text } from 'react-native'
import React, { useState } from 'react'

// packages imports
import { ImageSlider } from 'react-native-image-slider-banner';
import StatusCard from '../components/StatusScreenComponents/StatusCard';

const StatusScreen = () => {

  //image index position
  const [position,setPosition] = useState(1);

  //status images source
  const imgSource = [
    {
      title: 'Title 1',
      caption: 'Caption 1',
      url: 'http://placeimg.com/640/480/any',
    }, {
      title: 'Title 2',
      caption: 'Caption 2',
      url: 'http://placeimg.com/640/480/any',
    }, {
      title: 'Title 3',
      caption: 'Caption 3',
      url: 'http://placeimg.com/640/480/any',
    },
  ]

  return (
    <View className='flex-1 bg-white'>
      <StatusCard/>
      <StatusCard/>
    </View>
  )
}

export default StatusScreen