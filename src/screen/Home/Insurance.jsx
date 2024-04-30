import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import theme from '../../common/Theme';
import {boldFont, fontSizes, mediumFont} from '../../assets/Fonts/font';
import medical from '../../assets/images/Insurance/medical.png';
import secure from '../../assets/images/Insurance/secure.png';
import patient from '../../assets/images/Insurance/patient.png';
import travel from '../../assets/images/Insurance/travel.png';
import house from '../../assets/images/Insurance/house.png';
import selfDriving from '../../assets/images/Insurance/selfDriving.png';
import legal from '../../assets/images/Insurance/legal.png';
import ErrowRight from '../../assets/images/Insurance/ErrowRight.png';
import reminder from '../../assets/images/Insurance/reminder.png';
import insuranceBanner from '../../assets/images/Insurance/insuranceBanner.png';
import financeInsurance from '../../assets/images/Insurance/financeInsurance.jpg';
import ModInsurance from '../../assets/images/Insurance/ModInsurance.jpg';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';

const Insurance = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const hanldeClick = () => {
    Navigation.navigate('InsuranceDetail');
  };
  const handleSubmit = () => {
    Navigation.navigate('MyPolicies');
  };
  const handlePress = () => {
    Navigation.navigate('InsuranceDetail');
  };
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={theme.colors.shadGreen}
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <Text style={styles.heading}>Insurance Made</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.insurance_container, {width: width / 1.1}]}>
          <View style={styles.card_content}>
            <TouchableOpacity onPress={hanldeClick}>
              <View style={[styles.Cards, {width: width / 3.5}]}>
                <Image source={medical} style={styles.insurance_icons} />
                <Text style={styles.insurance_text}>
                  Health {'\n'}Insurance
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={hanldeClick}>
              <View style={[styles.Cards, {width: width / 3.5}]}>
                <Image source={secure} style={styles.insurance_icons} />
                <Text style={styles.insurance_text}>Term {'\n'}Insurance</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={hanldeClick}>
              <View style={[styles.Cards, {width: width / 3.5}]}>
                <Image source={patient} style={styles.insurance_icons} />
                <Text style={styles.insurance_text}>Medical {'\n'}Popup</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.card_content}>
            <TouchableOpacity onPress={hanldeClick}>
              <View style={[styles.Cards, {width: width / 3.5}]}>
                <Image source={travel} style={styles.insurance_icons} />
                <Text style={styles.insurance_text}>
                  Travel {'\n'}Insurance
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={hanldeClick}>
              <View style={[styles.Cards, {width: width / 3.5}]}>
                <Image source={house} style={styles.insurance_icons} />
                <Text style={styles.insurance_text}>Home {'\n'}Insurance</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={hanldeClick}>
              <View style={[styles.Cards, {width: width / 3.5}]}>
                <Image source={selfDriving} style={styles.insurance_icons} />
                <Text style={styles.insurance_text}>
                  Vehicles {'\n'}Insurance
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.policy_card}>
            <View style={[styles.header_policy, {width: width / 1.18}]}>
              <View style={styles.inner_header}>
                <View style={styles.inner_blockContent}>
                  <Image source={legal} style={styles.policy_icons} />
                </View>
                <View>
                  <Text style={styles.policy_heading}>My Policies</Text>
                  <Text style={styles.policy_text}>
                    All your policy details at one place
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={handleSubmit}>
                <View>
                  <Image source={ErrowRight} style={styles.rightErrow_icons} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.policy_card}>
            <View style={[styles.header_policy, {width: width / 1.18}]}>
              <View style={styles.inner_header}>
                <View style={styles.inner_blockContent}>
                  <Image source={reminder} style={styles.policy_icons} />
                </View>
                <View>
                  <Text style={styles.policy_heading}>Reminders</Text>
                  <Text style={styles.policy_text}>
                    Meet your finencial duties on time
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={handlePress}>
                <View>
                  <Image source={ErrowRight} style={styles.rightErrow_icons} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <Swiper
            style={[styles.wrappers]}
            dotStyle={{top: 20, backgroundColor: theme.colors.green}}
            activeDotStyle={{
              top: 20,
              width: 30,
              backgroundColor: theme.colors.lightGreen,
            }}>
            <View>
              <Image
                source={financeInsurance}
                style={[styles.banner_image, {width: width / 1.15}]}
              />
            </View>
            <View>
              <Image
                source={insuranceBanner}
                style={[styles.banner_image, {width: width / 1.15}]}
              />
            </View>
            <View>
              <Image
                source={ModInsurance}
                style={[styles.banner_image, {width: width / 1.15}]}
              />
            </View>
          </Swiper>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Insurance;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.shadGreen,
    padding: 25,
    elevation: 4,
  },

  heading: {
    color: theme.colors.green,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
    alignSelf: 'center',
  },

  insurance_container: {
    alignSelf: 'center',
    marginTop: 30,
    gap: 20,
    marginBottom: 150,
  },
  card_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  Cards: {
    height: 140,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: theme.colors.white,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    borderWidth: 1,
    borderColor: theme.colors.lightGreen,
  },

  insurance_icons: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  insurance_text: {
    color: theme.colors.green,
    fontSize: fontSizes.medium,
    fontWeight: boldFont.fontWeight,
    textAlign: 'center',
  },
  policy_card: {
    backgroundColor: theme.colors.shadGreen,
    borderRadius: 15,
    height: 80,
    justifyContent: 'center',
    // paddingLeft: 20,
    // paddingRight: 20,
    borderWidth: 3,
    borderColor: theme.colors.white,
    elevation: 5,
  },
  policy_heading: {
    color: theme.colors.black,
    fontSize: fontSizes.medium,
    fontWeight: boldFont.fontWeight,
  },

  header_policy: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  inner_header: {
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inner_blockContent: {
    backgroundColor: theme.colors.white,
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    borderWidth: 1,
    borderColor: theme.colors.lightGreen,
  },
  policy_text: {
    color: 'gray',
    fontSize: 12.5,
    fontWeight: boldFont.fontWeight,
  },
  policy_icons: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  },
  rightErrow_icons: {
    width: 18,
    height: 18,
    resizeMode: 'stretch',
  },
  wrappers: {
    height: 240,
    gap: 3,
    marginTop: 30,
  },
  custom_card: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 18,
    borderBottomRightRadius: 18,
    padding: 16,
    height: 200,
    elevation: 3,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyCard: {
    gap: 70,
  },
  discover: {
    fontSize: fontSizes.small,
    color: theme.colors.black,
    marginTop: 10,
  },
  body_text: {
    width: '65%',
    fontSize: fontSizes.medium,
    color: theme.colors.black,
    fontWeight: mediumFont.fontWeight,
  },
  custom_img: {
    width: 140,
    height: 160,
    borderTopLeftRadius: 120,
    borderBottomLeftRadius: 120,
    backgroundColor: 'white',
  },
  banner_image: {
    height: 200,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    resizeMode: 'stretch',
  },
});
