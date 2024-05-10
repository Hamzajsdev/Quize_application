import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import theme from '../../common/Theme';
import {boldFont, fontSizes, regularFont} from '../../assets/Fonts/font';
import emailIcons from '../../assets/icons/email.png';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import OTPTextView from 'react-native-otp-textinput';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OTP = ({route}) => {
  const [error, setError] = useState('');
  const Navigation = useNavigation();
  const [timer, setTimer] = useState(120);
  const [otp, setOtp] = useState(['', '', '', '']);
  const {email} = route.params;
  useEffect(() => {
    startTimer();
  }, []);

  const startTimer = () => {
    const startTime = new Date().getTime();
    const maxTime = 2 * 60 * 1000;
    const updateTimer = () => {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;
      const remainingTime = maxTime - elapsedTime;

      if (remainingTime <= 0) {
        clearInterval(intervalId);
        setTimer(0);
      } else {
        setTimer(Math.ceil(remainingTime / 1000));
      }

      if (elapsedTime >= maxTime) {
        clearInterval(intervalId);
      }
    };
    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);
    return () => clearInterval(intervalId);
  };
  useEffect(() => {
    if (otp.length === 4) {
      handleSubmit();
    }
  }, [otp]);
  const handleSubmit = () => {
    if (otp.length !== 4) {
      return;
    }
    const isValidOTP = /^\d{4}$/.test(otp);
    if (!isValidOTP) {
      return;
    }
    axios
      .post('https://sus-api.mangocoders.com/api/token', {otp})
      .then(res => {
        // console.log(res.data.token,'------------');
        // AsyncStorage.setItem('token',res?.data?.token)
        Toast.show({
          type: 'success',
          text1: 'Successfully Login',
        });
        setTimeout(() => {
          Navigation.navigate('BottomTabs');
        }, 1000);
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Invalid OTP',
        });
      });
  };

  const handleResends = async () => {
    setError('');
    try {
      const response = await axios.post(
        'https://sus-api.mangocoders.com/api/mobile/login',
        {email: email},
      );
      Toast.show({
        type: 'success',
        text1: 'Generated New OTP Successfully',
      });
      startTimer();
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: err.response.data.message,
      });
    }
  };
  return (
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
              <Text style={styles.OtpTxt}>OTP</Text>
            </View>
          </LinearGradient>
          <View style={styles.card}>
            <View style={styles.contentContain}>
              <Text style={styles.content_Heading}>You've got Email</Text>
              <Image source={emailIcons} style={styles.mail} />
            </View>
            <Text style={styles.description}>
              We have start the OTP verification code to your email address.
              Check your email and enter the code below.{' '}
            </Text>

            <View style={[styles.box_Container]}>
              <OTPTextView
                inputCount={4}
                containerStyle={styles.textInputContainer}
                textInputStyle={styles.roundedTextInput}
                keyboardType="numeric"
                handleTextChange={setOtp}
              />
            </View>
            {error ? <Text style={styles.errorShow}>{error}</Text> : null}
            <View style={{gap: -10}}>
              <Text style={styles.heading}>Don't Receive Email? </Text>
              <Text style={styles.headingTime}>
                <TouchableOpacity>
                  <Text style={styles.headingTime}>Time remaining:</Text>
                </TouchableOpacity>{' '}
                {timer > 0 ? (
                  <TouchableOpacity>
                    <Text style={styles.counter}>
                      {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}
                      {timer % 60}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={handleResends}>
                    <Text style={[styles.ResendText]}> Resend</Text>
                  </TouchableOpacity>
                )}{' '}
                {timer > 0 ? (
                  <TouchableOpacity>
                    <Text style={styles.headingTime}>Second</Text>
                  </TouchableOpacity>
                ) : (
                  ''
                )}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Toast autoHide={true} visibilityTime={2500} position="top" />
    </SafeAreaView>
  );
};

export default OTP;

const styles = StyleSheet.create({
  header: {
    height: 200,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  disabled: {
    opacity: 0.5,
  },
  content: {
    flexDirection: 'row',
    gap: 128,
    alignItems: 'center',
    marginTop: 30,
  },
  OtpTxt: {
    color: theme.colors.white,
    fontSize: fontSizes.x_large,
    fontWeight: boldFont.fontWeight,
    textAlign: 'center',
    marginTop: 35,
  },
  errow: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  card: {
    width: '95%',
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignSelf: 'center',
    padding: 30,
    elevation: 5,
    marginTop: -50,
    marginBottom: 30,
  },
  mail: {
    width: 30,
    height: 30,
  },
  contentContain: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  content_Heading: {
    color: theme.colors.black,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
  },
  description: {
    color: theme.colors.black,
    fontSize: fontSizes.medium,
    fontWeight: regularFont.fontWeight,
    marginTop: 10,
  },
  box: {
    width: '19.5%',
    height: 65,
    borderRadius: 10,
    borderColor: theme.colors.green,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    color: theme.colors.black,
    padding: 10,
    textAlign: 'center',
    fontSize: fontSizes.medium,
    fontWeight: regularFont.fontWeight,
  },
  heading: {
    textAlign: 'center',
    fontSize: fontSizes.medium,
    fontWeight: regularFont.fontWeight,
    marginTop: 25,
    color: theme.colors.black,
    alignItems: 'center',
  },
  headingTime: {
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'center',
    fontSize: fontSizes.medium,
    color: theme.colors.black,
    fontWeight: regularFont.fontWeight,
  },
  counter: {
    fontSize: fontSizes.medium,
    color: 'red',
  },
  login_btn: {
    backgroundColor: theme.colors.green,
    height: 48,
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
  bottom_border: {
    width: '100%',
    height: 100,
  },
  errorShow: {
    color: 'red',
    fontSize: fontSizes.medium,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  ResendText: {
    fontSize: fontSizes.medium,
    color: theme.colors.green,
    fontWeight: boldFont.fontWeight,
    textDecorationLine: 'underline',
  },
  clickedText: {
    color: 'red',
  },
  textInputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 0,
  },
  roundedTextInput: {
    height: 65,
    width: '20%',
    color: theme.colors.lightGreen,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: theme.colors.green,
  },
});
