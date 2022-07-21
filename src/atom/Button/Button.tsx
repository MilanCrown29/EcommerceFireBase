import * as React from 'react';
import {
  ViewStyle,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {baseStyles, colors} from '../../styles/theme';
import buttonStyles from './style';

interface ButtonProps {
  onPress?: () => void;
  title?: string;
  iconName?: string;
  color?:string;
  isLoading?: boolean;
  style?: ViewStyle;
  shape?: string;
  size?: number;
  background?: string;
}
const Button = ({
  onPress,
  size,
  shape,
  style,
  isLoading,
  background,
  color,
  iconName,
  title,
}: ButtonProps) => {
  const bStyle = buttonStyles({size, background, shape});
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        bStyle.container,
        style,
        isLoading && bStyle.loading,
        baseStyles.buttonShadow,
      ]}
      disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator color={colors.yellow} size="large" />
      ) : (
        <>
          {iconName && (
            <Ionicons name={iconName} color={colors.black} size={25} />
          )}
          {title && <Text style={baseStyles.headerSmSpace}>{title}</Text>}
        </>
      )}
    </TouchableOpacity>
  );
};
export default Button;
