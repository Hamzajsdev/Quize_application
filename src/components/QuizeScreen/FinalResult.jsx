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
import React, {useState} from 'react';
import theme from '../../common/Theme';
import {boldFont, fontSizes, mediumFont} from '../../assets/Fonts/font';
import profileUser from '../../assets/images/ProfileUsers/profileUser.png';
import userProfile2 from '../../assets/images/ProfileUsers/userProfile2.png';
import coins from '../../assets/icons/coins.png';

const FinalResult = () => {
  const {width} = useWindowDimensions();
  const [activeTab, setActiveTab] = useState('weekly');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={theme.colors.shadGreen}
        barStyle="dark-content"
      />
      <View style={styles.banner}>
        <View style={styles.banner_content}>
          <Text style={styles.banner_text}>LeaderBoard</Text>
        </View>
      </View>
      <ScrollView>
        <View style={[styles.main_header, {width: width / 1.1}]}>
          <View style={styles.badges_container}>
            <TouchableOpacity
              style={[
                styles.weeklyBadge,
                activeTab === 'weekly' && styles.activeTab,
                {
                  backgroundColor:
                    activeTab === 'weekly'
                      ? theme.colors.green
                      : theme.colors.lightGreen,
                  width: width / 4,
                },
              ]}
              onPress={() => handleTabClick('weekly')}>
              <Text style={styles.badge_text}>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.monthly,
                activeTab === 'monthly' && styles.activeTab,
                {
                  backgroundColor:
                    activeTab === 'monthly'
                      ? theme.colors.green
                      : theme.colors.lightGreen,
                  width: width / 4,
                },
              ]}
              onPress={() => handleTabClick('monthly')}>
              <Text style={styles.badge_text}>Monthly</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.country,
                activeTab === 'country' && styles.activeTab,
                {
                  backgroundColor:
                    activeTab === 'country'
                      ? theme.colors.green
                      : theme.colors.lightGreen,
                  width: width / 4,
                },
              ]}
              onPress={() => handleTabClick('country')}>
              <Text style={styles.badge_text}>USA</Text>
            </TouchableOpacity>
          </View>
          {activeTab === 'weekly' && (
            <View style={styles.crads}>
              <Text style={styles.winner_text}>This Week's Winners Are</Text>
              <View
                style={[
                  styles.profile_header,
                  {width: width / 3.4, marginTop: 100},
                ]}>
                <Image source={profileUser} style={styles.profile} />
                <Text style={styles.profile_text}>Andrew</Text>
                <View style={styles.point_card}>
                  <Text style={styles.points}>80</Text>
                  <Image source={coins} style={styles.coins} />
                </View>
                <View style={styles.point_no}>
                  <Text style={styles.position_text}> 2nd {'\n'} No</Text>
                </View>
              </View>
              <View style={[styles.profile_header, {width: width / 3.4}]}>
                <Image source={userProfile2} style={styles.profile} />
                <Text style={styles.profile_text}>Michel</Text>
                <View style={styles.point_card}>
                  <Text style={styles.points}>100</Text>
                  <Image source={coins} style={styles.coins} />
                </View>
                <View style={styles.point_no}>
                  <Text style={styles.position_text}> 1st {'\n'} No</Text>
                </View>
              </View>
              <View
                style={[
                  styles.profile_header,
                  {width: width / 3.4, marginTop: 100},
                ]}>
                <Image source={profileUser} style={styles.profile} />
                <Text style={styles.profile_text}>Jons</Text>
                <View style={styles.point_card}>
                  <Text style={styles.points}>50</Text>
                  <Image source={coins} style={styles.coins} />
                </View>
                <View style={styles.point_no}>
                  <Text style={styles.position_text}> 3rd {'\n'} No</Text>
                </View>
              </View>
            </View>
          )}
          {activeTab === 'monthly' && (
            <View style={styles.crads}>
              <Text style={styles.winner_text}>This Monthly Winners Are</Text>
              <View
                style={[
                  styles.profile_header,
                  {width: width / 3.4, marginTop: 100},
                ]}>
                <Image source={userProfile2} style={styles.profile} />
                <Text style={styles.profile_text}>Michel</Text>
                <View style={styles.point_card}>
                  <Text style={styles.points}>150</Text>
                  <Image source={coins} style={styles.coins} />
                </View>
                <View style={styles.point_no}>
                  <Text style={styles.position_text}> 2nd {'\n'} No</Text>
                </View>
              </View>
              <View style={[styles.profile_header, {width: width / 3.4}]}>
                <Image source={profileUser} style={styles.profile} />
                <Text style={styles.profile_text}>Andrew</Text>
                <View style={styles.point_card}>
                  <Text style={styles.points}>300</Text>
                  <Image source={coins} style={styles.coins} />
                </View>
                <View style={styles.point_no}>
                  <Text style={styles.position_text}> 1st {'\n'} No</Text>
                </View>
              </View>
              <View
                style={[
                  styles.profile_header,
                  {width: width / 3.4, marginTop: 100},
                ]}>
                <Image source={userProfile2} style={styles.profile} />
                <Text style={styles.profile_text}>Jimmy</Text>
                <View style={styles.point_card}>
                  <Text style={styles.points}>130</Text>
                  <Image source={coins} style={styles.coins} />
                </View>
                <View style={styles.point_no}>
                  <Text style={styles.position_text}> 3rd {'\n'} No</Text>
                </View>
              </View>
            </View>
          )}
        </View>

        <View style={styles.Remain_content}>
          <View style={[styles.remain_user, {width: width / 1.1}]}>
            <View style={styles.main_headerContent}>
              <View style={styles.reamin_profile}>
                <Text style={styles.points}>4</Text>
                <Image source={profileUser} style={styles.profile_img} />
                <Text style={styles.profile_name}>Clinton</Text>
              </View>
              <View style={styles.header_remain}>
                <Text style={styles.points}>2,480</Text>
              </View>
            </View>
            <View style={styles.main_headerContent}>
              <View style={styles.reamin_profile}>
                <Text style={styles.points}>5</Text>
                <Image source={userProfile2} style={styles.profile_img} />
                <Text style={styles.profile_name}>Jamal</Text>
              </View>
              <View style={styles.header_remain}>
                <Text style={styles.points}>1,080</Text>
              </View>
            </View>
            <View style={styles.main_headerContent}>
              <View style={styles.reamin_profile}>
                <Text style={styles.points}>6</Text>
                <Image source={profileUser} style={styles.profile_img} />
                <Text style={styles.profile_name}>Leif</Text>
              </View>
              <View style={styles.header_remain}>
                <Text style={styles.points}>3,210</Text>
              </View>
            </View>
            <View style={styles.main_headerContent}>
              <View style={styles.reamin_profile}>
                <Text style={styles.points}>7</Text>
                <Image source={userProfile2} style={styles.profile_img} />
                <Text style={styles.profile_name}>Leif</Text>
              </View>
              <View style={styles.header_remain}>
                <Text style={styles.points}>1,510</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FinalResult;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: theme.colors.shadGreen,
    elevation: 4,
    padding: 20,
    paddingTop: 25,
  },
  banner_content: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 5,
  },
  banner_text: {
    color: theme.colors.green,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
  },
  main_header: {
    alignSelf: 'center',
    marginTop: 30,
  },
  crads: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.shadGreen,
    borderWidth: 4,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  profile: {
    width: 60,
    height: 60,
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
  },
  points: {
    color: theme.colors.black,
    fontSize: fontSizes.small,
    fontWeight: mediumFont.fontWeight,
  },
  point_card: {
    backgroundColor: theme.colors.shadGreen,
    paddingLeft: 7,
    paddingRight: 5,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    borderColor: theme.colors.lightGreen,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  profile_text: {
    color: theme.colors.green,
    fontSize: fontSizes.x_small,
    fontWeight: boldFont.fontWeight,
  },
  point_no: {
    backgroundColor: theme.colors.lightGreen,
    height: 45,
    width: 35,
    elevation: 5,
    borderRadius: 7,
    marginTop: 5,
    marginBottom: 15,
  },
  position_text: {
    color: theme.colors.white,
    textAlign: 'center',
    marginTop: 5,
  },
  Remain_content: {
    backgroundColor: theme.colors.shadGreen,
    marginTop: 30,
    marginBottom: 130,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  remain_user: {
    alignSelf: 'center',
    marginTop: 30,
    gap: 20,
    marginBottom: 30,
  },
  reamin_profile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  profile_img: {
    width: 45,
    height: 45,
    resizeMode: 'stretch',
    borderRadius: 100,
    backgroundColor: theme.colors.lightGreen,
  },
  header_remain: {
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    padding: 10,
    elevation: 2,
  },
  main_headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile_name: {
    fontSize: fontSizes.x_medium,
    fontWeight: boldFont.fontWeight,
    color: theme.colors.green,
  },
  weeklyBadge: {
    backgroundColor: theme.colors.green,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  monthly: {
    backgroundColor: theme.colors.lightGreen,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  country: {
    backgroundColor: theme.colors.lightGreen,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  badge_text: {
    color: theme.colors.white,
    fontSize: fontSizes.medium,
    fontWeight: boldFont.fontWeight,
  },
  badges_container: {
    backgroundColor: theme.colors.shadGreen,
    padding: 15,
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.white,
    borderWidth: 4,
    flexDirection: 'row',
    gap: 10,
  },
  winner_text: {
    position: 'absolute',
    top: 10,
    left: 70,
    color: theme.colors.green,
    fontSize: fontSizes.medium,
    fontWeight: boldFont.fontWeight,
  },
  coins: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
});
