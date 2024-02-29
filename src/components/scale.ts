import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const widthPoints = 839;

export function fontScale(size) {
  return RFValue(size, widthPoints);
}

export function widthpoint(size) {
  return wp(size);
}

export function heightpoint(size) {
  return hp(size);
}
