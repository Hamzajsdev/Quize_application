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
import {boldFont, fontSizes, mediumFont} from '../assets/Fonts/font';
import backErrow from '../assets/icons/backErrow.png';
import {useNavigation} from '@react-navigation/native';

const InsuranceDetail = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const handleSubmit = () => {
    Navigation.navigate('Insurance');
  };
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={theme.colors.shadGreen}
        barStyle="dark-content"
      />
      <View style={styles.banner}>
        <View style={styles.banner_content}>
          <TouchableOpacity onPress={handleSubmit}>
            <Image source={backErrow} style={styles.backErrow} />
          </TouchableOpacity>
          <Text style={styles.banner_text}>Insurance Summary</Text>
        </View>
      </View>

      <ScrollView>
        <View style={[styles.insurane_information, {width: width / 1.1}]}>
          <Text style={styles.information}>Insurance Information</Text>
        </View>
        <View style={styles.summary}>
          <View style={[styles.summary_content, {width: width / 1.1}]}>
            <View>
              <Text style={styles.products}>Products Type</Text>
              <View style={styles.status_content}>
                <Text style={styles.plan}>Policy Plan</Text>
                <Text style={styles.ips}>IPP</Text>
              </View>
              <View style={styles.status_content}>
                <Text style={styles.plan}>Status</Text>
                <Text style={styles.ips}>In Force</Text>
              </View>
            </View>
            <View>
              <Text style={styles.products}>Policy Date</Text>
              <View style={styles.status_content}>
                <Text style={styles.plan}>Start Date</Text>
                <Text style={styles.ips}>01 March 2024</Text>
              </View>
              <View style={styles.status_content}>
                <Text style={styles.plan}>Issue date</Text>
                <Text style={styles.ips}>31 March 2024</Text>
              </View>
              <View style={styles.status_content}>
                <Text style={styles.plan}>Maturity date</Text>
                <Text style={styles.ips}>06 April 2024</Text>
              </View>
            </View>
            <View>
              <Text style={styles.products}>Additional</Text>
              <View style={styles.status_content}>
                <Text style={styles.plan}>Investment Strategy</Text>
                <Text style={styles.ips}>N/A</Text>
              </View>
              <View style={styles.status_content}>
                <Text style={styles.plan}>Policy Value*</Text>
                <Text style={styles.ips}>$ 10, 140.89</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InsuranceDetail;

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
    gap: 25,
  },
  banner_text: {
    color: theme.colors.green,
    fontSize: 22,
    fontWeight: mediumFont.fontWeight,
  },
  insurane_information: {
    alignSelf: 'center',
    marginTop: 40,
  },
  information: {
    fontSize: 20,
    color: theme.colors.black,
    fontWeight: mediumFont.fontWeight,
  },
  summary: {
    backgroundColor: theme.colors.white,
    elevation: 2,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 5,
    borderColor: theme.colors.shadGreen,
  },
  summary_content: {
    alignSelf: 'center',
    marginTop: 20,
    gap: 20,
    marginBottom: 20,
  },
  products: {
    color: theme.colors.green,
    fontWeight: boldFont.fontWeight,
    fontSize: fontSizes.x_medium,
  },
  status_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  plan: {
    color: theme.colors.black,
    fontWeight: mediumFont.fontWeight,
    fontSize: fontSizes.small,
  },
  ips: {
    color: theme.colors.green,
    fontWeight: mediumFont.fontWeight,
    fontSize: 17,
  },
});
