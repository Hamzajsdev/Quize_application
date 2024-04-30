import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import theme from '../../common/Theme';
import login from '../../assets/icons/login.png';
import {boldFont, fontSizes, regularFont} from '../../assets/Fonts/font';
import {
  Center,
  Input,
  NativeBaseProvider,
  Stack,
  Select,
  Box,
  CheckIcon,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import emailIcon from '../../assets/icons/email.png';
import nameIcon from '../../assets/icons/nameIcon.png';
import telephone from '../../assets/icons/telephone.png';
import genderIcon from '../../assets/icons/gender.png';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Signup = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(11, 'Must be at least 11 characters')
      .max(15, 'Must not exceed 15 characters')
      .required('Phone number is required'),
    // gender: Yup.string().required('Gender is required'),
  });
  const [gender, setGender] = useState('');
  const Navigation = useNavigation();
  const handlepress = () => {
    Navigation.navigate('Login');
  };
  const handleGenderChange = itemValue => {
    console.log(itemValue);
    setGender(itemValue);
  };

  const handleSubmit = values => {
    const payload={
      name: values.name,
      email: values.email,
      phone: values.phone,
      gender: gender,
    }
    console.log(payload);
    axios.post('https://sus-api.mangocoders.com/api/mobile/signup', payload)
      .then(res => {
        console.log(res.data);
        // if (res.data === ) {
          Alert.alert('Signup successful!');
          Navigation.navigate('Login');
        // } else {
          Alert.alert('Signup failed', JSON.stringify(res.data));
        // }
      })
      .catch(err => console.log(err.response));
  };
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <StatusBar
          backgroundColor={theme.colors.green}
          barStyle="light-content"
        />
        <ScrollView>
          <View>
            <LinearGradient
              colors={['#338573', '#66D4BC', '#4faa98']}
              style={styles.header}>
              <View>
                <View style={styles.content}>
                  <Text style={styles.loginTxt}>Sign Up</Text>
                  <Image source={login} style={styles.login} />
                </View>
              </View>
            </LinearGradient>
            <Formik
              initialValues={{
                name: '',
                email: '',
                phone: '',
                gender: '',
              }}
              validationSchema={validationSchema}
              onSubmit={values => handleSubmit(values)}>
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
                      placeholder="Full Name"
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                      InputLeftElement={
                        <Image source={nameIcon} style={styles.fieldIcons} />
                      }
                    />
                    {errors.name && touched.name && (
                      <Text style={styles.validation}>{errors.name}</Text>
                    )}

                    <Input
                      placeholder="Email-address"
                      keyboardType="email-address"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      InputLeftElement={
                        <Image source={emailIcon} style={styles.fieldIcons} />
                      }
                    />
                    {errors.email && touched.email && (
                      <Text style={styles.validation}>{errors.email}</Text>
                    )}

                    <Input
                      placeholder="Phone Number"
                      keyboardType="phone-pad"
                      onChangeText={handleChange('phone')}
                      onBlur={handleBlur('phone')}
                      value={values.phone}
                      InputLeftElement={
                        <Image source={telephone} style={styles.fieldIcons} />
                      }
                    />
                    {errors.phone && touched.phone && (
                      <Text style={styles.validation}>
                        {errors.phone}
                      </Text>
                    )}

                    <Center>
                      <Box>
                        <Select
                          selectedValue={gender}
                          minWidth={'100%'}
                          placeholder="Choose Gender"
                          _selectedItem={{
                            bg: 'teal.600',
                            endIcon: <CheckIcon size="4" />,
                          }}
                          InputLeftElement={
                            <Image
                              source={genderIcon}
                              style={{width: 28, height: 28, marginLeft: 10}}
                            />
                          }
                          onValueChange={handleGenderChange}>
                          <Select.Item label="Male" value="male" />
                          <Select.Item label="Female" value="female" />
                          <Select.Item label="Other" value="other" />
                        </Select>
                        {/* {errors.gender && touched.gender && !genders && (
                          <Text style={styles.gendervalidation}>
                            {errors.gender}
                          </Text>
                        )} */}
                      </Box>
                    </Center>
                  </Stack>
                  <TouchableOpacity onPress={handleSubmit}>
                    <View style={styles.login_btn}>
                      <Text style={styles.login_txt}>Login</Text>
                    </View>
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.heading}>
                      Already have an account?{' '}
                      <Text
                        style={{
                          color: theme.colors.green,
                          textDecorationLine: 'underline',
                        }}
                        onPress={handlepress}>
                        Login
                      </Text>
                    </Text>
                  </View>
                </View>
              )}
            </Formik>

            <View style={styles.term_condition}>
              <Text style={styles.condition}>
                By signing Up/Logging in, you'r agree to our
                <Text style={{color: theme.colors.green}}>
                  {' '}
                  {'\n'}
                  Term of services{' '}
                </Text>
                and{' '}
                <Text style={{color: theme.colors.green}}> Privacy Policy</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Signup;

const styles = StyleSheet.create({
  header: {
    height: 200,
    width: '100%',
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
  email: {},
  fieldIcons: {
    width: 27,
    height: 27,
    marginLeft: 10,
    resizeMode: 'stretch',
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
    marginTop: 20,
    color: theme.colors.black,
  },
  eye: {
    width: 50,
    height: 25,
    resizeMode: 'contain',
  },
  crossedEye: {
    tintColor: theme.colors.green,
    textDecorationLine: 'line-through',
  },
  term_condition: {
    alignSelf: 'center',
    width: '90%',
    marginTop: 480,
  },
  condition: {
    color: theme.colors.black,
    fontSize: fontSizes.small,
    fontWeight: regularFont.fontWeight,
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 20,
  },
  validation: {
    color: 'red',
    alignSelf: 'flex-start',
    marginTop: -10,
  },
  gendervalidation: {
    color: 'red',
    alignSelf: 'flex-start',
    marginTop: 5,
  },
});
