import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import theme from '../../common/Theme';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {boldFont, fontSizes, mediumFont} from '../../assets/Fonts/font';
import winner from '../../assets/images/Innonation/winner.png';
import celebrate from '../../assets/images/Innonation/celebrate.png';
import LinearGradient from 'react-native-linear-gradient';
import userProfile2 from '../../assets/images/ProfileUsers/userProfile2.png';
import coins from '../../assets/icons/coins.png';

const WinnerQuize = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      Navigation.navigate('FinalResult');
    }, 2000);
  });
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
      <LinearGradient
        style={styles.congrate}
        colors={['#66D4BC', '#4faa98', '#338573']}>
        <Text style={styles.text}>Congratulation you're Winner </Text>
        <Image source={celebrate} style={[styles.celebrate]} />
      </LinearGradient>
      <View style={[styles.container, {width: width / 1.1}]}>
        <View style={styles.Winner_card}>
          <View style={styles.winner_Content}>
            <Image source={winner} style={styles.winner} />
          </View>
          <Text style={styles.heading}>Quize {'\n'} Completed!</Text>
          <View style={styles.score}>
            <Text style={styles.score_text}>You score Till now</Text>
          </View>

          <View style={[styles.profile_header, {width: width / 3.4}]}>
            <Image source={userProfile2} style={styles.profile} />
            <Text style={styles.profile_text}>Michel</Text>
            <View style={styles.point_card}>
              <Text style={styles.points}>100 </Text>
              <Image source={coins} style={styles.coins} />
            </View>
            <View style={styles.point_no}>
              <Text style={styles.position_text}>1st Position</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WinnerQuize;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  Winner_card: {
    height: 440,
    backgroundColor: theme.colors.shadGreen,
    position: 'relative',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    marginTop: 80,
    borderColor:theme.colors.white,
    borderWidth:1
  },
  winner_Content: {
    position: 'absolute',
    width: 105,
    height: 105,
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.lightGreen,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    top: -50,
    elevation: 5,
  },
  winner: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
  },
  heading: {
    padding: 20,
    textAlign: 'center',
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
    color: theme.colors.green,
    marginTop: 60,
  },
  congrate: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    flexDirection: 'row',
    gap: 7,
  },
  text: {
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: boldFont.fontWeight,
  },
  celebrate: {
    width: 35,
    height: 35,
    resizeMode: 'stretch',
  },
  score: {
    backgroundColor: theme.colors.white,
    padding: 8,
    elevation: 5,
  },
  score_text: {
    color: theme.colors.black,
    textAlign: 'center',
    fontSize: fontSizes.medium,
    fontWeight: boldFont.fontWeight,
  },
  profile: {
    width: 80,
    height: 80,
    resizeMode: 'stretch',
    borderRadius: 100,
    backgroundColor: theme.colors.shadGreen,
  },

  profile_header: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginBottom: 10,
    marginTop: 20,
  },
  points: {
    color: theme.colors.black,
    fontSize: fontSizes.small,
    fontWeight: mediumFont.fontWeight,
  },
  point_card: {
    backgroundColor: theme.colors.shadGreen,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 80,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    borderColor: theme.colors.lightGreen,
    borderWidth: 1,
    flexDirection: 'row',
    // gap:3
  },
  profile_text: {
    color: theme.colors.green,
    fontSize: fontSizes.medium,
    fontWeight: boldFont.fontWeight,
  },
  point_no: {
    backgroundColor: theme.colors.lightGreen,
    height: 45,
    width: 120,
    elevation: 5,
    borderRadius: 7,
    marginTop: 5,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  position_text: {
    color: theme.colors.white,
    fontSize: fontSizes.medium,
    fontWeight: boldFont.fontWeight,
  },
  coins: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
});
