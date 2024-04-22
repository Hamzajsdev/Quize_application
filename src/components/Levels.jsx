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
import theme from '../common/Theme';
import backErrow from '../assets/icons/backErrow.png';
import {boldFont, fontSizes, mediumFont} from '../assets/Fonts/font';
import {useNavigation} from '@react-navigation/native';
import leafFlower from '../assets/images/leafFlower.png';
import level from '../assets/icons/level.png';

const Levels = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const handlePress = () => {
    Navigation.navigate('Profile');
  };
  return (
    <SafeAreaView style={{marginBottom: 70}}>
      <StatusBar backgroundColor={theme.colors.shadGreen} />
      <View style={styles.container}>
        <View style={[styles.header, {width: width / 1.1}]}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={backErrow} style={styles.backErrow} />
          </TouchableOpacity>
          <Text style={styles.heading}>Your Achivements</Text>
          <Text></Text>
        </View>
      </View>
      <ScrollView>
        <View style={[styles.main_container, {width: width / 1.1}]}>
          <View style={styles.card}>
            <View style={styles.banner}>
              <Text style={styles.banner_text}>Levels</Text>
            </View>
            <View>
              <View style={styles.badge_container}>
                <View style={{gap: 8}}>
                  <View style={styles.badge_content}>
                    <Image source={level} style={styles.level_icon} />
                  </View>
                  <Text style={styles.sm_heading}>The Spark</Text>
                  <View style={styles.content_point}>
                    <Text style={styles.point}>0</Text>
                    <Image source={leafFlower} style={styles.leaf_icon} />
                  </View>
                </View>

                <View style={{gap: 8}}>
                  <View style={styles.badge_content}>
                    <Image source={level} style={styles.level_icon} />
                  </View>
                  <Text style={styles.sm_headings}>The {'\n'} Awakening</Text>
                  <View style={styles.content_point}>
                    <Text style={styles.point}>150</Text>
                    <Image source={leafFlower} style={styles.leaf_icon} />
                  </View>
                </View>

                <View style={{gap: 8}}>
                  <View style={styles.badge_contents}>
                    <Image source={level} style={styles.level_icon} />
                  </View>
                  <Text style={styles.sm_heading}>The Spark</Text>
                  <View style={styles.content_point}>
                    <Text style={styles.point}>1040</Text>
                    <Image source={leafFlower} style={styles.leaf_icon} />
                  </View>
                </View>
              </View>

              <View style={styles.badge_container}>
                <View style={{gap: 8}}>
                  <View style={styles.badge_contents}>
                    <Image source={level} style={styles.level_icon} />
                  </View>
                  <Text style={styles.sm_headings}>The {'\n'} Explore</Text>
                  <View style={styles.content_point}>
                    <Text style={styles.point}>4000</Text>
                    <Image source={leafFlower} style={styles.leaf_icon} />
                  </View>
                </View>

                <View style={{gap: 8}}>
                  <View style={styles.badge_contents}>
                    <Image source={level} style={styles.level_icon} />
                  </View>
                  <Text style={styles.sm_headings}>The {'\n'} Purpose</Text>
                  <View style={styles.content_point}>
                    <Text style={styles.point}>8000</Text>
                    <Image source={leafFlower} style={styles.leaf_icon} />
                  </View>
                </View>

                <View style={{gap: 8}}>
                  <View style={styles.badge_contents}>
                    <Image source={level} style={styles.level_icon} />
                  </View>
                  <Text style={styles.sm_headings}>The {'\n'} Belonging</Text>
                  <View style={styles.content_point}>
                    <Text style={styles.point}>120</Text>
                    <Image source={leafFlower} style={styles.leaf_icon} />
                  </View>
                </View>
              </View>

              <View style={styles.badge_container}>
                <View style={{gap: 8}}>
                  <View style={styles.badge_contents}>
                    <Image source={level} style={styles.level_icon} />
                  </View>
                  <Text style={styles.sm_headings}>
                    The {'\n'} Chanqemarker
                  </Text>
                  <View style={styles.content_point}>
                    <Text style={styles.point}>4000</Text>
                    <Image source={leafFlower} style={styles.leaf_icon} />
                  </View>
                </View>

                <View style={{gap: 8}}>
                  <View style={styles.badge_contents}>
                    <Image source={level} style={styles.level_icon} />
                  </View>
                  <Text style={styles.sm_headings}>The {'\n'} Advocate</Text>
                  <View style={styles.content_point}>
                    <Text style={styles.point}>9000</Text>
                    <Image source={leafFlower} style={styles.leaf_icon} />
                  </View>
                </View>

                <View style={{gap: 8}}>
                  <View style={styles.badge_contents}>
                    <Image source={level} style={styles.level_icon} />
                  </View>
                  <Text style={styles.sm_headings}>The {'\n'} Lighthouse</Text>
                  <View style={styles.content_point}>
                    <Text style={styles.point}>250</Text>
                    <Image source={leafFlower} style={styles.leaf_icon} />
                  </View>
                </View>
              </View>

              <View style={styles.badge_container}>
                <View style={{gap: 8}}>
                  <View style={styles.badge_contents}>
                    <Image source={level} style={styles.level_icon} />
                  </View>
                  <Text style={styles.sm_headings}>The {'\n'} Ambassador</Text>
                  <View style={styles.content_point}>
                    <Text style={styles.point}>10000</Text>
                    <Image source={leafFlower} style={styles.leaf_icon} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Levels;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.shadGreen,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  backErrow: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
  heading: {
    color: theme.colors.green,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
  },

  main_container: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  card: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 30,
  },
  banner: {
    height: 60,
    backgroundColor: theme.colors.lightGreen,
    borderTopLeftRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner_text: {
    color: theme.colors.white,
    fontSize: fontSizes.large,
    fontWeight: mediumFont.fontWeight,
  },
  badge_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    paddingTop: 30,
  },
  badge_content: {
    backgroundColor: theme.colors.lightGreen,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    elevation: 5,
    width: 65,
  },
  leaf_icon: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
  point: {
    fontSize: fontSizes.medium,
    color: theme.colors.green,
    fontWeight: mediumFont.fontWeight,
  },
  content_point: {
    flexDirection: 'row',
    gap: 4,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.shadGreen,
    paddingLeft: 13,
    paddingRight: 13,
    borderRadius: 40,
    elevation: 5,
  },
  sm_heading: {
    fontSize: fontSizes.small,
    color: theme.colors.black,
    fontWeight: mediumFont.fontWeight,
  },
  sm_headings: {
    fontSize: fontSizes.small,
    color: theme.colors.black,
    fontWeight: mediumFont.fontWeight,
    textAlign: 'center',
  },
  level_icon: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  badge_contents: {
    backgroundColor: 'lightgray',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    elevation: 5,
    width: 65,
  },
});
