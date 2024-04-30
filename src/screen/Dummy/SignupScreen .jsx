import React, {useEffect, useState} from 'react';
import {View, TextInput, Button, Alert, StyleSheet} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import userData from './users.json';

const SignupScreen = () => {
  const [apiData, setApiData] = useState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const Navigation = useNavigation();

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    // Mock API endpoint
    // axios
    //   .post('http://localhost:3000/signup', {email, password})
    //   .then(response => {
    //     Alert.alert('Success', 'Signup successful');
    //     Navigation.navigate('LoginScreen');
    //   })
    //   .catch(error => {
    //     Alert.alert('Error', 'Signup failed');
    //     console.error(error);
    //   });
    const existingUser = userData.users.find(user => user.email === email);
    if (existingUser) {
      Alert.alert('Error', 'User already exists');
      return;
    }
    Alert.alert('Success', 'Signup successful');
    Navigation.navigate('LoginScreen');
  };

  const userDatas = async () => {
    const getdata = 'https://fakestoreapi.com/products/1';
    const res = await getdata.json();
    setApiData(res);
  };

  useEffect(() => {
    userDatas();
  }, []);

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Confirm Password"
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry={true}
      />
      <Button title="Signup" onPress={handleSignup} />

      {apiData ? (
        <View>
          <Text>{apiData.id}</Text>
        </View>
      ) : (
        null
      )}
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
