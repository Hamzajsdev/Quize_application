import {
  Image,
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
import bg_shap from '../../assets/images/slideImage/bg_shap.jpg';
import {
  CheckIcon,
  Checkbox,
  CloseIcon,
  Icon,
  NativeBaseProvider,
} from 'native-base';

const Slide7 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionPress = option => {
    setSelectedOption(option);
  };
  const {width} = useWindowDimensions();

  return (
    <>
    <Image source={bg_shap} resizeMode='stretch' style={styles.shap1}/>
    <Image source={bg_shap} resizeMode='stretch' style={styles.shap2}/>
    <View style={[styles.container, {width: width / 1.1}]}>
      <LinearGradient
        colors={['#338573', '#66D4BC', '#4faa98']}
        style={[styles.card]}>
        <View style={styles.markQ}>
          <Image source={question} style={styles.question} />
        </View>
        <Text style={styles.mainText}>You can improve education just through financial donations.</Text>
      </LinearGradient>
      <NativeBaseProvider>
        <View style={[styles.container, {width: width / 1.1}]}>
          <TouchableOpacity
            style={[
              styles.option,
              {
                width: width / 2,
                backgroundColor:
                  selectedOption === 'True'
                    ? theme.colors.green
                    : theme.colors.lightGreen,
              },
            ]}
            onPress={() => handleOptionPress('True')}>
            <View style={styles.groups}>
              <Text style={styles.text}>True</Text>
              {selectedOption === 'True' && (
                <CheckIcon style={styles.CheckIcon} />
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              {
                width: width / 2,
                backgroundColor:
                  selectedOption === 'False' ? 'red' : theme.colors.lightGreen,
              },
            ]}
            onPress={() => handleOptionPress('False')}>
            <View style={styles.groups}>
              <Text style={styles.text}>False</Text>
              {selectedOption === 'False' && (
                <CloseIcon style={styles.CheckIcon} />
              )}
            </View>
         
          </TouchableOpacity>
        </View>
      </NativeBaseProvider>
    </View>
    </>
  );
};

export default Slide7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 25,
  },
  card: {
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    marginTop: 120,
    elevation: 5,
    borderWidth:3,
    borderColor:'#ECFFFB',
  
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
    backgroundColor: theme.colors.lightGreen,
    height: 60,
    borderRadius: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth:2,
    borderColor:'#ECFFFB',
    elevation:5
  },
  text: {
    color: theme.colors.white,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
    textAlign: 'center',
  },
  groups: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  CheckIcon: {
    color: theme.colors.white,
    height: 40,
    width: 25,
  },
  mainText:{
    color:theme.colors.white,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
    textAlign: 'center',
    marginTop: 20,
  },
  shap1:{
    position:'absolute', 
    bottom:0, left:0, 
    width:110,
    height:110,
    borderTopRightRadius:200
  },
   shap2:{
   position:'absolute', 
   top:0, right:0, 
   width:110,
   height:110,
   borderBottomLeftRadius:200
  }
  
});
