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
import {useNavigation} from '@react-navigation/native';
import backErrow from '../assets/icons/backErrow.png';
import theme from '../common/Theme';
import {boldFont, fontSizes, mediumFont} from '../assets/Fonts/font';
import leafFlower from '../assets/images/leafFlower.png';
import carewater from '../assets/images/carewater.jpg';
import pointAct from '../assets/images/pointAct.jpg';
import sustainSeries from '../assets/images/sustainSeries.jpg';
import eatmeal from '../assets/images/eatmeal.jpg';

const AllPoints = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const handlePress = () => {
    Navigation.navigate('Profile');
  };
  return (
    <SafeAreaView style={{marginBottom: 50}}>
      <StatusBar backgroundColor={theme.colors.shadGreen} />
      <View style={styles.container}>
        <View style={[styles.header, {width: width / 1.1}]}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={backErrow} style={styles.backErrow} />
          </TouchableOpacity>
          <Text style={styles.heading}>Your Progress</Text>
          <Text></Text>
        </View>
      </View>
      <ScrollView>
        <View style={{marginBottom: 80}}>
          <View style={[styles.allpoints, {width: width / 1.1}]}>
            <View style={styles.main_heading}>
              <Text style={styles.main_content}>Total Points</Text>
              <View style={styles.point_content}>
                <Image source={leafFlower} style={styles.leaf_icon} />
                <Text style={styles.point}>151</Text>
              </View>
            </View>

            <View>
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
                  <View style={[styles.leaf_points, {width: width / 6}]}>
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
                  <View style={[styles.leaf_points, {width: width / 6}]}>
                    <Text style={styles.lg_heading}>100</Text>
                    <Image source={leafFlower} style={styles.leaf_icons} />
                  </View>
                </View>
                <View style={[styles.point_content, {marginBottom: 10}]}>
                  <View style={styles.missingPoing_content}>
                    <Image source={sustainSeries} style={styles.carewater} />
                    <View style={styles.waterCare_container}>
                      <Text style={styles.sm_headings}>June 10 12:10</Text>
                      <Image source={leafFlower} style={styles.leaf_icons} />
                      <Text style={styles.sm_headings}>Series</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.point_content}>
                  <View style={styles.missingPoing_content}>
                    <Image source={eatmeal} style={styles.carewater} />
                    <View style={styles.waterCare_container}>
                      <Text style={styles.sm_headings}>Apr 2 12:12</Text>
                      <Text style={[styles.point_head, {width: width / 3}]}>
                        Eat a vegetarian meal
                      </Text>
                      <Text style={styles.sm_headings}>Actions</Text>
                    </View>
                  </View>
                  <View style={[styles.leaf_points, {width: width / 6}]}>
                    <Text style={styles.lg_heading}>1</Text>
                    <Image source={leafFlower} style={styles.leaf_icons} />
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

export default AllPoints;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.shadGreen,
    elevation: 4,
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
  allpoints: {
    alignSelf: 'center',
    marginTop: 30,
  },
  main_heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  point_content: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  main_content: {
    fontSize: fontSizes.x_medium,
    color: theme.colors.black,
    fontWeight: mediumFont.fontWeight,
  },
  point_cards: {
    backgroundColor: theme.colors.shadGreen,
    padding: 30,
    paddingTop: 40,
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    gap: 50,
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
    height: 30,
    paddingTop: 3,
    elevation: 2,
    backgroundColor: theme.colors.shadGreen,
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: theme.colors.lightGreen,
    borderRadius: 50,
  },
  lg_heading: {
    color: theme.colors.green,
    fontSize: fontSizes.x_medium,
    fontWeight: mediumFont.fontWeight,
  },
});
