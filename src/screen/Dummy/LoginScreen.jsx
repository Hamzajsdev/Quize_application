import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const Navigation=useNavigation()
  return (
    <View>
      <Text onPress={()=>{
        Navigation.goBack('SignupScreen')
      }}>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})