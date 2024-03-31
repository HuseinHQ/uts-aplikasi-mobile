import {Dimensions} from 'react-native';

const RatioHelper = {
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
};

export default RatioHelper;
