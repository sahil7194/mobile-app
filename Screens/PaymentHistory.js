import React from 'react'
import { View , Text } from 'react-native'
import { Header } from '../Components/Header'

export const PaymentHistory = () => {
  return (
    <View>
      <Header/>
      <Text className="text-yellow-600">
        This Payment History screen
      </Text>
    </View>
  )
}

