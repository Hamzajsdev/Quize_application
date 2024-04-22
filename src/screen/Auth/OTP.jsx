import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import theme from '../../common/Theme';
import {boldFont, fontSizes, regularFont} from '../../assets/Fonts/font';
import email from '../../assets/icons/email.png';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const OTP = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const handlepress = () => {
    Navigation.navigate('Login');
  };
  const handlesubmit = () => {
    Navigation.navigate('BottomTabs');
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
              <Image source={email} style={styles.mail} />
            </View>
            <Text style={styles.description}>
              We have start the OTP verification code to your email address.
              Check your email and enter the code below.{' '}
            </Text>

            <View style={[styles.box_Container, {width: width / 1.2}]}>
              <View style={styles.box}>
                <TextInput placeholder="" style={styles.input} />
              </View>
              <View style={styles.box}>
                <TextInput placeholder="" style={styles.input} />
              </View>
              <View style={styles.box}>
                <TextInput placeholder="" style={styles.input} />
              </View>
              <View style={styles.box}>
                <TextInput
                  placeholder=""
                  style={styles.input}
                  keyboardType={'number-pad'}
                />
              </View>
            </View>

            <View style={{gap: -10}}>
              <Text style={styles.heading}>Don't Receive Email? </Text>
              <Text style={styles.heading}>
                You can resend code in{' '}
                <Text style={{color: theme.colors.green}}>55</Text> s
              </Text>
            </View>
            <TouchableOpacity onPress={handlesubmit}>
              <View style={styles.login_btn}>
                <Text style={styles.login_txt}>Resend</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    marginTop:35
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
    marginTop: -30,
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
  box_Container: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 24,
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
    // position:'absolute',
    // bottom:0
  },
});
