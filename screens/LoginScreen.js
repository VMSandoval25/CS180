import { View, Text, Button } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

const LoginScreen = () => {
  const { signInWithGoogle } = useAuth()
  const { user } = useAuth()
  console.log(user)
  return (
    <View>
      <Text>Log in to the app</Text>
      <Button title = 'login' onPress={signInWithGoogle}/>
    </View>
  )
}

export default LoginScreen


