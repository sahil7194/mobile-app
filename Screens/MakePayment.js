import React from 'react'
import { View , Text } from 'react-native'
import { Header } from '../Components/Header'

export const MakePayment = () => {
  return (
    <View>
      <Header/>
      <Text className="text-yellow-600">
        This Make Payment screen
      </Text>
    </View>
  )
}

