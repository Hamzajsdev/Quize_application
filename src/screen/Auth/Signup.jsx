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
import React, {useState} from 'react';
import theme from '../../common/Theme';
import login from '../../assets/icons/login.png';
import {boldFont, fontSizes, regularFont} from '../../assets/Fonts/font';
import {Input, NativeBaseProvider, Pressable, Stack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import lock from '../../assets/icons/lock.png';
import email from '../../assets/icons/email.png';
import eye from '../../assets/icons/eye.png';
import LinearGradient from 'react-native-linear-gradient';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const Navigation = useNavigation();
  const handlepress = () => {
    Navigation.navigate('Login');
  };
  const handleSubmit =()=>{
    Navigation.navigate('Login');
  }
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
            <View style={styles.card}>
              <Stack space={4} w="100%" alignItems="center">
                <Input
                  placeholder="Email-address"
                  keyboardType="email-address"
                  InputLeftElement={
                    <Image source={email} style={styles.email} />
                  }
                />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  InputLeftElement={
                    <Image source={lock} style={styles.email} />
                  }
                  InputRightElement={
                    <Pressable onPress={() => setShowPassword(!showPassword)}>
                      <Image
                        source={eye}
                        style={[styles.eye, showPassword && styles.crossedEye]}
                        name={showPassword ? 'visibility' : 'visibility-off'}
                      />
                    </Pressable>
                  }
                  placeholder="Password"
                />

                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  InputLeftElement={
                    <Image source={lock} style={styles.email} />
                  }
                  InputRightElement={
                    <Pressable
                      onPress={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }>
                      <Image
                        source={eye}
                        style={[
                          styles.eye,
                          showConfirmPassword && styles.crossedEye,
                        ]}
                        name={
                          showConfirmPassword ? 'visibility' : 'visibility-off'
                        }
                      />
                    </Pressable>
                  }
                  placeholder="Confirm Password"
                />
              </Stack>
              <TouchableOpacity onPress={handleSubmit}>
              <View style={styles.login_btn}>
                <Text style={styles.login_txt}>Sign Up</Text>
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
    marginTop: 35,
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
});
