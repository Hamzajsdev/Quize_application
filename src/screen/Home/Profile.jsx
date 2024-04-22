import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {boldFont, fontSizes, mediumFont} from '../../assets/Fonts/font';
import React from 'react';
import theme from '../../common/Theme';
import setting from '../../assets/icons/setting.png';
import profile from '../../assets/icons/profile.png';
import share from '../../assets/icons/share.png';
import level from '../../assets/icons/level.png';
import leafFlower from '../../assets/images/leafFlower.png';
import grayflower from '../../assets/images/grayflower.png';
import carewater from '../../assets/images/carewater.jpg';
import pointAct from '../../assets/images/pointAct.jpg';
import sustainSeries from '../../assets/images/sustainSeries.jpg';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const hanldePress = () => {
    Navigation.navigate('Levels');
  };
  const hanldeSubmit = () => {
    Navigation.navigate('Setting');
  };

  const hanldeClick = () => {
    Navigation.navigate('AllPoints');
  };  

  return (
    <SafeAreaView style={{marginBottom: 100}}>
      <StatusBar
        backgroundColor={theme.colors.shadGreen}
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <View style={[styles.container_fluid, {width: width / 1.1}]}>
          <Text style={styles.heading}>Profile</Text>
          <TouchableOpacity onPress={hanldeSubmit}>
            <View style={styles.border}>
              <Image source={setting} style={styles.setting} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={[styles.main_container, {width: width / 1.1}]}>
          <View style={[styles.card]}>
            <View style={styles.content}>
              <View style={styles.profile_content}>
                <Image source={profile} style={styles.user} />
                <Text style={[styles.name, {width: width / 3}]}>
                  Muhammad Hamza
                </Text>
              </View>
              <View style={styles.share_icon}>
                <Image source={share} style={styles.share} />
              </View>
            </View>
            <View style={styles.level}>
              <TouchableOpacity onPress={hanldePress}>
                <View style={[styles.btn, {width: width / 2.6}]}>
                  <Image source={level} style={styles.level_icon} />
                  <View>
                    <Text style={styles.sm_heading}>Level 1</Text>
                    <Text style={styles.md_heading}>The Awakening</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <View style={[styles.btn, {width: width / 2.6}]}>
                <Image source={leafFlower} style={styles.leaf_icon} />
                <View>
                  <Text style={styles.sm_heading}>points</Text>
                  <Text style={styles.lg_heading}>151</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.tabs}>
            <View style={styles.tabs_content}>
              <Text style={styles.tabs_text}>Performance</Text>
              <Text style={styles.inactive_text}>Savings</Text>
              <Text style={styles.inactive_text}>Footprint</Text>
            </View>
          </View>

          <View style={styles.level_cards}>
            <View style={styles.main_cardContent}>
              <Text style={styles.level_text}>Level 1</Text>
              <Text style={styles.main_text}>The Awakening</Text>
            </View>

            <View style={styles.border_bottom}></View>
            <View style={styles.leaf_content}>
              <View style={styles.header_leafs}>
                <Image source={leafFlower} style={styles.leafFlower} />
                <Text style={styles.lg_heading}>151</Text>
              </View>
              <View style={styles.header_leafs}>
                <Image source={grayflower} style={styles.leafFlower} />
                <Text style={styles.lg_headings}>1,040</Text>
              </View>
            </View>

            <View style={styles.main_cardContent}>
              <View style={styles.missing_level}>
                <Image source={grayflower} style={styles.leafFlower} />
                <Text style={styles.missing_text}>889 missing to level up</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badge_text}>The Pivot</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.points}>Total Points</Text>
            <View style={styles.point_cards}>
              <View style={styles.point_content}>
                <View style={styles.missingPoing_content}>
                  <Image source={carewater} style={styles.carewater} />
                  <View style={styles.waterCare_container}>
                    <Text style={styles.sm_headings}>May 8 16:43</Text>
                    <Text style={[styles.point_head, {width: width / 3}]}>
                      Why Care About Water?
                    </Text>
                    <Text style={styles.sm_headings}>Episodes</Text>
                  </View>
                </View>
                <View style={styles.leaf_points}>
                  <Text style={styles.lg_heading}>50</Text>
                  <Image source={leafFlower} style={styles.leaf_icons} />
                </View>
              </View>
              <View style={styles.point_content}>
                <View style={styles.missingPoing_content}>
                  <Image source={pointAct} style={styles.carewater} />
                  <View style={styles.waterCare_container}>
                    <Text style={styles.sm_headings}>Apr 8 14:23</Text>
                    <Text style={[styles.point_head, {width: width / 3}]}>
                      Act Now!
                    </Text>
                    <Text style={styles.sm_headings}>Journey</Text>
                  </View>
                </View>
                <View style={styles.leaf_points}>
                  <Text style={styles.lg_heading}>100</Text>
                  <Image source={leafFlower} style={styles.leaf_icons} />
                </View>
              </View>
              <View style={[styles.point_content,{marginBottom:20}]}>
                <View style={styles.missingPoing_content}>
                  <Image source={sustainSeries} style={styles.carewater} />
                  <View style={styles.waterCare_container}>
                    <Text style={styles.sm_headings}>June 10 12:10</Text>
                    <Image source={leafFlower} style={styles.leaf_icons} />
                    <Text style={styles.sm_headings}>Series</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View>
            <TouchableOpacity onPress={hanldeClick}>
              <LinearGradient
                colors={['#338573', '#66D4BC', '#4faa98']}
                style={styles.button}>
                <Text style={styles.botton_text}>View All</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  main_container: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  container: {
    backgroundColor: theme.colors.shadGreen,
    padding: 25,
    elevation: 4,
  },
  container_fluid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  setting: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
  border: {
    borderWidth: 10,
    borderColor: theme.colors.shadGreen,
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  heading: {
    color: theme.colors.green,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
  },
  card: {
    backgroundColor: theme.colors.white,
    elevation: 3,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 200,
    marginTop: 30,
    padding: 15,
    paddingTop: 23,
    borderWidth: 4,
    borderColor: theme.colors.shadGreen,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile_content: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  user: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  name: {
    color: theme.colors.black,
    fontSize: 22,
    fontWeight: mediumFont.fontWeight,
  },
  share_icon: {
    backgroundColor: theme.colors.shadGreen,
    borderRadius: 100,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  share: {
    width: 21,
    height: 21,
    resizeMode: 'stretch',
  },
  level: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  btn: {
    height: 55,
    backgroundColor: theme.colors.shadGreen,
    borderWidth: 1,
    borderColor: theme.colors.lightGreen,
    borderRadius: 6,
    paddingLeft: 7,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  level_icon: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  },
  sm_heading: {
    color: theme.colors.black,
    fontSize: fontSizes.x_small,
    fontWeight: mediumFont.fontWeight,
    textTransform: 'uppercase',
  },
  md_heading: {
    color: theme.colors.green,
    fontSize: 12.5,
    fontWeight: mediumFont.fontWeight,
  },
  leaf_icon: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
  lg_heading: {
    color: theme.colors.green,
    fontSize: fontSizes.x_medium,
    fontWeight: mediumFont.fontWeight,
  },
  tabs: {
    backgroundColor: theme.colors.shadGreen,
    height: 40,
    marginTop: 30,
    borderRadius: 50,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  tabs_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabs_text: {
    color: theme.colors.green,
    fontSize: fontSizes.x_medium,
    fontWeight: mediumFont.fontWeight,
  },
  inactive_text: {
    color: 'gray',
    fontSize: fontSizes.x_medium,
    fontWeight: mediumFont.fontWeight,
  },
  level_cards: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    padding: 15,
    marginTop: 30,
    height: 200,
  },
  main_cardContent: {
    alignSelf: 'center',
  },
  level_text: {
    textAlign: 'center',
    color: theme.colors.black,
    fontSize: fontSizes.small,
    fontWeight: mediumFont.fontWeight,
    textTransform: 'uppercase',
  },
  main_text: {
    color: theme.colors.green,
    fontSize: fontSizes.large,
    fontWeight: mediumFont.fontWeight,
  },
  border_bottom: {
    backgroundColor: theme.colors.shadGreen,
    height: 7,
    borderRadius: 50,
    marginTop: 15,
  },
  leaf_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  header_leafs: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  leafFlower: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
  lg_headings: {
    color: 'gray',
    fontSize: fontSizes.x_medium,
    fontWeight: mediumFont.fontWeight,
  },
  missing_level: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    marginTop: 4,
  },
  missing_text: {
    color: theme.colors.black,
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
  },
  badge: {
    alignSelf: 'center',
    backgroundColor: theme.colors.shadGreen,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 4,
    paddingTop: 4,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  badge_text: {
    color: theme.colors.green,
    fontSize: fontSizes.small,
    fontWeight: mediumFont.fontWeight,
  },
  points: {
    color: theme.colors.black,
    fontSize: fontSizes.large,
    fontWeight: mediumFont.fontWeight,
    marginTop: 35,
  },
  point_cards: {
    backgroundColor: theme.colors.shadGreen,
    padding: 30,
    paddingTop: 40,
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    gap: 50,
    elevation:4
  },
  point_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  carewater: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    borderRadius: 100,
  },
  missingPoing_content: {
    flexDirection: 'row',
    gap: 13,
  },
  waterCare_container: {
    gap: 3,
  },
  sm_headings: {
    color: 'gray',
    fontSize: fontSizes.small,
    fontWeight: mediumFont.fontWeight,
  },
  point_head: {
    fontSize: fontSizes.x_medium,
    fontWeight: boldFont.fontWeight,
    color: theme.colors.black,
  },
  leaf_icons: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
  leaf_points: {
    flexDirection: 'row',
    gap: 5,
  },
  button: {
    height: 48,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  botton_text: {
    color: theme.colors.shadGreen,
    fontSize: fontSizes.x_medium,
    fontWeight: boldFont.fontWeight,
  },
});
