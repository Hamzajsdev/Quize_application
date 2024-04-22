import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {fontSizes, mediumFont} from '../../assets/Fonts/font';
import {useNavigation} from '@react-navigation/native';
import {Checkbox, Input, NativeBaseProvider, Stack} from 'native-base';
import React from 'react';
import theme from '../../common/Theme';
import backErrow from '../../assets/icons/backErrow.png';
import search from '../../assets/icons/search.png';
import profileUser from '../../assets/images/ProfileUsers/profileUser.png';
import userProfile2 from '../../assets/images/ProfileUsers/userProfile2.png';
import LinearGradient from 'react-native-linear-gradient';

const InviteFriend = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const handleSubmit = () => {
    Navigation.navigate('Quizes');
  };
  const handlePress = () => {
    Navigation.navigate('QuizeText');
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          backgroundColor={theme.colors.shadGreen}
          barStyle="dark-content"
        />
        <View style={styles.banner}>
          <View style={styles.banner_content}>
            <TouchableOpacity onPress={handleSubmit}>
              <Image source={backErrow} style={styles.backErrow} />
            </TouchableOpacity>
            <Text style={styles.banner_text}>Invite Friend to Play</Text>
          </View>
        </View>
        <ScrollView style={{marginBottom: 100}}>
          <View style={[styles.main_Container, {width: width / 1.1}]}>
            <View>
              <Stack space={4} w="100%" alignItems="center">
                <Input
                  placeholder="Search Friends, name"
                  keyboardType="text"
                  InputLeftElement={
                    <Image source={search} style={styles.search} />
                  }
                />
                <Text style={styles.search_text}>
                  Friend Selected{' '}
                  <Text style={{color: theme.colors.green}}>(6)</Text>{' '}
                </Text>
                <View
                  style={[styles.borderBottom, {width: width / 1.1}]}></View>
              </Stack>
            </View>
            <View style={styles.header_content}>
              <View style={styles.profile_quizeContent}>
                <View style={styles.profile_quize}>
                  <Image source={profileUser} style={styles.profileUser} />
                  <Text style={styles.profileUser_text}>Pedro Dorrance</Text>
                </View>
                <View>
                  <Checkbox
                    shadow={2}
                    value="test"
                    accessibilityLabel="checkbox"></Checkbox>
                </View>
              </View>
              <View style={styles.profile_quizeContent}>
                <View style={styles.profile_quize}>
                  <Image source={userProfile2} style={styles.profileUser} />
                  <Text style={styles.profileUser_text}>Daryl Mukastic </Text>
                </View>
                <View>
                  <Checkbox
                    shadow={2}
                    value="test"
                    accessibilityLabel="checkbox"></Checkbox>
                </View>
              </View>
              <View style={styles.profile_quizeContent}>
                <View style={styles.profile_quize}>
                  <Image source={profileUser} style={styles.profileUser} />
                  <Text style={styles.profileUser_text}>Tyra Shelburne</Text>
                </View>
                <View>
                  <Checkbox
                    shadow={2}
                    value="test"
                    accessibilityLabel="checkbox"></Checkbox>
                </View>
              </View>
              <View style={styles.profile_quizeContent}>
                <View style={styles.profile_quize}>
                  <Image source={userProfile2} style={styles.profileUser} />
                  <Text style={styles.profileUser_text}>Yancy Fraclin</Text>
                </View>
                <View>
                  <Checkbox
                    shadow={2}
                    value="test"
                    accessibilityLabel="checkbox"></Checkbox>
                </View>
              </View>
              <View style={styles.profile_quizeContent}>
                <View style={styles.profile_quize}>
                  <Image source={profileUser} style={styles.profileUser} />
                  <Text style={styles.profileUser_text}>Yancy Fraclin</Text>
                </View>
                <View>
                  <Checkbox
                    shadow={2}
                    value="test"
                    accessibilityLabel="checkbox"></Checkbox>
                </View>
              </View>
              <View style={styles.profile_quizeContent}>
                <View style={styles.profile_quize}>
                  <Image source={userProfile2} style={styles.profileUser} />
                  <Text style={styles.profileUser_text}>Yancy Fraclin</Text>
                </View>
                <View>
                  <Checkbox
                    shadow={2}
                    value="test"
                    accessibilityLabel="checkbox"></Checkbox>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={handlePress}>
          <LinearGradient
            style={[styles.main_btn, {width: width / 1.1}]}
            colors={['#66D4BC', '#4faa98', '#338573']}>
            <Text style={styles.btnText}>Send Invite & Play now</Text>
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default InviteFriend;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: theme.colors.shadGreen,
    height: 80,
    elevation: 3,
    padding: 20,
    paddingTop: 25,
  },
  backErrow: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
  banner_content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  banner_text: {
    color: theme.colors.green,
    fontSize: fontSizes.x_medium,
    fontWeight: mediumFont.fontWeight,
  },
  main_Container: {
    alignSelf: 'center',
    marginTop: 30,
  },
  search: {
    width: 17,
    height: 17,
    marginLeft: 10,
  },
  search_text: {
    color: theme.colors.black,
    fontSize: fontSizes.x_medium,
    fontWeight: mediumFont.fontWeight,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  borderBottom: {
    borderColor: theme.colors.shadGreen,
    borderWidth: 1.5,
    borderRadius: 30,
  },
  profileUser: {
    width: 45,
    height: 45,
    resizeMode: 'stretch',
    borderRadius: 100,
    backgroundColor: theme.colors.shadGreen,
    elevation: 5,
  },
  profile_quize: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  profileUser_text: {
    color: theme.colors.black,
    fontSize: fontSizes.x_medium,
    fontWeight: mediumFont.fontWeight,
  },
  check_box: {
    height: 100,
  },
  profile_quizeContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header_content: {
    marginTop: 30,
    gap: 35,
  },
  main_btn: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: theme.colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    height: 48,
  },
  btnText: {
    color: theme.colors.white,
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
  },
});
