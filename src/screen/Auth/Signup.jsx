import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
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
import Toast from 'react-native-toast-message';
import { user_Signup } from '../../utils/User_Api';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .required('Phone number is required'),
    // gender: Yup.string().required('Gender is required'),
  });
  const [gender, setGender] = useState('');
  const Navigation = useNavigation();
  const handlepress = () => {
    Navigation.navigate('Login');
  };
  const handleGenderChange = itemValue => {
    setGender(itemValue);
  };
  const handleSubmit = async values => {
    setLoading(true);
    const payload = {
      'name': values.name,
      'email': values.email,
      'phone': values.phone,
      'gender': gender,
    };
    try {
      const response = await user_Signup(payload);
      Toast.show({
        type: 'success',
        text1: 'User successfully signed up',
      });
      setTimeout(() => {
        setLoading(false);
        Navigation.navigate('Login');
      }, 1500);
    } catch (error) {
      let errorMessage = '';
      if (error.response && error.response.data && error.response.data.errors) {
        const errors = error.response.data.errors;
        if (errors.name) errorMessage += `${errors.name}`;
        if (errors.phone) errorMessage += `${errors.phone}`; 
        if (errors.email) errorMessage += `${errors.email}`;
        if (errors.gender) errorMessage += `${errors.gender}`;
      } else {
        errorMessage = 'An error occurred while signing up';
      }
      Toast.show({ 
        type: 'error',
        text1: errorMessage.trim(),
      });
      setLoading(false);
    }
  };
  
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <StatusBar
          backgroundColor={theme.colors.green}
          barStyle="light-content"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
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
                      <Text style={styles.validation}>{errors.phone}</Text>
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
                        {errors.gender && touched.gender && !gender && (
                          <Text style={styles.gendervalidation}>
                            {errors.gender}
                          </Text>
                        )}
                    
                      </Box>
                    </Center>
                  </Stack>
                  <TouchableOpacity onPress={handleSubmit} disabled={loading}>
                    <View style={styles.login_btn}>
                      {loading ? (
                        <ActivityIndicator color="#ffffff" />
                      ) : (
                        <Text style={styles.login_txt}>SignUp</Text>
                      )}
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
        <Toast autoHide={true} visibilityTime={2500} position="top" />
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
    top: 140,
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
    marginTop: 475,
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
    marginTop: -6,
    marginBottom: -3,
  },
  gendervalidation: {
    color: 'red',
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  errorShow: {
    color: 'red',
    fontSize: fontSizes.small,
    alignSelf: 'flex-start',
    // marginTop: 5,
    // marginBottom:5
  },
});
