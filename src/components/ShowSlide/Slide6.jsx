import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../common/Theme';
import question from '../../assets/icons/question.png';
import {boldFont, fontSizes} from '../../assets/Fonts/font';
import {CheckIcon, CloseIcon, NativeBaseProvider} from 'native-base';
import Q_leafImg from '../../assets/images/slideImage/Q_leafImag.jpg';

const Slide6 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionPress = option => {
    setSelectedOption(option);
  };
  const {width, height} = useWindowDimensions();
  return (
    <>
      <Image
        source={Q_leafImg}
        style={[styles.cover_img, {width: width / 1, height: height / 1}]}
        resizeMode="stretch"
      />
      <View style={[styles.container, {width: width / 1.1}]}>
        <LinearGradient
          colors={['#338573', '#66D4BC', '#4faa98']}
          style={[styles.card]}>
          <View style={styles.markQ}>
            <Image source={question} style={styles.question} />
          </View>
          <Text style={styles.mainText}>
            Do well-known household appliance brands have products with heigh
            energy-saving index?{' '}
          </Text>
        </LinearGradient>

        <NativeBaseProvider>
          <View style={{gap: 10}}>
            <TouchableOpacity
              style={[
                styles.option,
                {
                  backgroundColor:
                    selectedOption === 'True'
                      ? theme.colors.green
                      : '#ECFFFB',
                },
              ]}
              onPress={() => handleOptionPress('True')}>
              <View style={styles.groups}>
                <Text style={styles.Q_Text}>Yes, always</Text>
                {selectedOption === 'True' && (
                  <CheckIcon style={styles.CheckIcon} />
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.option,
                {
                  backgroundColor:
                    selectedOption === 'False'
                      ? 'red'
                      : '#ECFFFB',
                },
              ]}
              onPress={() => handleOptionPress('False')}>
              <View style={styles.groups}>
                <Text style={styles.Q_Text}>No, its just greenwashing</Text>
                {selectedOption === 'False' && (
                  <CloseIcon style={styles.CheckIcon} />
                )}
              </View>
            </TouchableOpacity>

            <View style={styles.option}>
              <Text style={styles.Q_Text}>
                There are labels to checks the efficiency and disposal index
              </Text>
            </View>
          </View>
        </NativeBaseProvider>
      </View>
    </>
  );
};

export default Slide6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 25,
  },
  card: {
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    marginTop: 70,
    elevation: 5,
    borderWidth:1.5,
    borderColor: theme.colors.lightGreen,
  },
  markQ: {
    backgroundColor: theme.colors.lightGreen,
    width: 60,
    height: 60,
    borderRadius: 100,
    position: 'absolute',
    top: -30,
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  question: {
    width: 45,
    height: 45,
  },
  option: {
    backgroundColor: '#ECFFFB',
    padding: 15,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor:theme.colors.lightGreen,
    borderWidth:2,
    elevation:5
  },
  mainText: {
    color: theme.colors.white,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
    textAlign: 'center',
    marginTop: 20,
  },
  Q_Text: {
    color: theme.colors.lightGreen,
    textAlign: 'center',
    fontSize: fontSizes.x_medium,
    fontWeight: boldFont.fontWeight,
  },
  groups: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  CheckIcon: {
    color: theme.colors.white,
    height: 40,
    width: 30,
  },
  cover_img: {
    position: 'absolute',
    top: 0,
    alignSelf: 'flex-start',
  },
});
