import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import theme from '../../common/Theme';
import login from '../../assets/icons/login.png';
import email from '../../assets/icons/email.png';
import LinearGradient from 'react-native-linear-gradient';
import {boldFont, fontSizes, regularFont} from '../../assets/Fonts/font';
import {Input, NativeBaseProvider, Stack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {user_Login} from '../../utils/User_Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Login = () => {

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });
  const Navigation = useNavigation();
  const handlepress = () => {
    Navigation.navigate('Signup');
  };


  const handleSubmit = (values) => {
    axios.post('https://sus-api.mangocoders.com/api/mobile/login', {
      email: 'matee.mangocoders@gmail.com',
    })
    .then(res => {
      console.log(res.data);
      if (res.data && res.data.success) {
        Alert.alert('Login successful!');
        Navigation.navigate('NextScreen');
      } else {
        Alert.alert('Login failed', JSON.stringify(res.data));
      }
    })
    .catch(err => {
      console.error('Error:', err.response);
      Alert.alert('Login failed', 'An unexpected error occurred. Please try again later.');
    });
  };
   
  // const handleSubmit =()=>{
  //   const checkEmail = email;
  //   if(!checkEmail){
  //     user_Login({
  //       email:email,
  //     })
  //     .then((result)=>{
  //       console.log(result);
  //       if(result.status ==200){
  //         AsyncStorage.setItem('AsccessToken', result.data.token)
  //         Navigation.navigate("OTP")
  //       }
  //     }).catch(err=>{
  //       console.log(err);
  //     })
  //   }else{
  //     Alert.alert(checkEmail)
  //   }
  // }

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <StatusBar backgroundColor={'#338573'} barStyle="light-content" />
        <ScrollView>
          <View>
            <LinearGradient
              colors={['#338573', '#66D4BC', '#4faa98']}
              style={styles.header}>
              <View>
                <View style={styles.content}>
                  <Text style={styles.loginTxt}>Login</Text>
                  <Image source={login} style={styles.login} />
                </View>
              </View>
            </LinearGradient>
             <Formik
              initialValues={{
                email: '',
              }}
              validationSchema={validationSchema}
              onSubmit={values => handleSubmit(values)}
              > 
               {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                
              }) => ( 
                <View style={styles.card}>
                  <Stack space={4} w="100%" alignItems="center">
                    <Input
                      placeholder="Email-address"
                      keyboardType="email-address"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      InputLeftElement={
                        <Image source={email} style={styles.fieldIcons} />
                      }
                    />
                     {errors.email && touched.email && (
                      <Text style={styles.validation}>{errors.email}</Text>
                    )} 
                  </Stack>
                  <TouchableOpacity onPress={handleSubmit}>
                    <View style={styles.login_btn}>
                      <Text
                        style={styles.login_txt}
                      >
                        Login
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.heading}>
                      Dont't have an account?{' '}
                      <Text
                        style={{
                          color: theme.colors.green,
                          textDecorationLine: 'underline',
                        }}
                        onPress={handlepress}>
                        Sign Up
                      </Text>
                    </Text>
                  </View>
                </View>
                )} 
             </Formik> 
          </View>
          <View style={styles.term_condition}>
            <Text style={styles.condition}>
              By signing Up/Logging in, you'r agree to our
              <Text style={{color: theme.colors.green}}>
                {'\n'}Term of services
              </Text>{' '}
              and
              <Text style={{color: theme.colors.green}}> Privacy Policy</Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
    
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    height: 200,
    alignItems: 'center',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  content: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  loginTxt: {
    color: theme.colors.white,
    fontSize: fontSizes.x_large,
    fontWeight: boldFont.fontWeight,
  },
  login: {
    width: 45,
    height: 45,
  },
  card: {
    position: 'absolute',
    top: 165,
    width: '95%',
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignSelf: 'center',
    padding: 30,
    elevation: 5,
  },
  email: {
    width: 27,
    height: 27,
    marginLeft: 10,
  },
  login_btn: {
    backgroundColor: theme.colors.green,
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 25,
  },
  login_txt: {
    color: theme.colors.white,
    fontSize: fontSizes.x_medium,
    fontWeight: boldFont.fontWeight,
  },
  heading: {
    textAlign: 'center',
    fontSize: fontSizes.medium,
    fontWeight: regularFont.fontWeight,
    marginTop: 25,
    color: theme.colors.black,
  },
  term_condition: {
    alignSelf: 'center',
    width: '90%',
    marginTop: 400,
  },
  condition: {
    color: theme.colors.black,
    fontSize: fontSizes.small,
    fontWeight: regularFont.fontWeight,
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 20,
  },
  fieldIcons: {
    width: 27,
    height: 27,
    marginLeft: 10,
    resizeMode: 'stretch',
  },
  validation: {
    color: 'red',
    alignSelf: 'flex-start',
    marginTop: -10,
  },
});
