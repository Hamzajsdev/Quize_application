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
import React from 'react';
import theme from '../../common/Theme';
import {boldFont, fontSizes, mediumFont} from '../../assets/Fonts/font';
import LinearGradient from 'react-native-linear-gradient';
import team from '../../assets/images/Innonation/team.png';
import handshake from '../../assets/images/Innonation/handshake.png';
import {useNavigation} from '@react-navigation/native';

const Quizes = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const handlePress = () => {
    Navigation.navigate('InviteFriend');
  };
  const handleSubmit = () => {
    Navigation.navigate('InviteFriend');
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#338573'} barStyle="light-content" />
      <ScrollView>
        <View>
          <LinearGradient
            colors={['#338573', '#66D4BC', '#4faa98']}
            style={styles.header}>
            <View>
              <View style={styles.content}>
                <Text style={styles.header_text}>Play Quize</Text>
              </View>
            </View>
          </LinearGradient>
          <View style={[styles.card_header, {width: width / 1.1}]}>
            <View style={styles.card}>
              <Text style={styles.card_heading}>Battle of the day</Text>
              <TouchableOpacity onPress={handlePress}>
                <View style={styles.sm_card}>
                  <Text style={styles.card_text}>Group Battle Quize</Text>
                  <Text style={styles.sm_cardtext}>
                    It's a group quiz battle
                  </Text>
                  <Image source={team} style={styles.team} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleSubmit}>
                <View style={[styles.sm_card, {marginBottom: 15}]}>
                  <Text style={styles.card_text}>1 V/S 1 Battle Quize</Text>
                  <Text style={styles.sm_cardtext}>Battle with one on one</Text>
                  <Image source={handshake} style={styles.team} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Quizes;

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
  header_text: {
    color: theme.colors.white,
    fontSize: fontSizes.x_large,
    fontWeight: boldFont.fontWeight,
  },
  card_header: {
    alignSelf: 'center',
    marginTop: -50,
    marginBottom: 80,
  },
  card: {
    backgroundColor: theme.colors.shadGreen,
    padding: 20,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  card_heading: {
    textAlign: 'center',
    color: theme.colors.green,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
  },
  sm_card: {
    backgroundColor: theme.colors.white,
    padding: 20,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    marginTop: 30,
    gap: 8,
    borderWidth: 5,
    borderColor: theme.colors.shadGreen,
  },
  card_text: {
    textAlign: 'center',
    color: theme.colors.black,
    fontSize: fontSizes.x_medium,
    fontWeight: boldFont.fontWeight,
  },
  sm_cardtext: {
    textAlign: 'center',
    color: 'gray',
    fontSize: fontSizes.small,
    fontWeight: mediumFont.fontWeight,
  },
  team: {
    width: 70,
    height: 80,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
});
