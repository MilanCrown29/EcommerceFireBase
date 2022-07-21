import {Dimensions, StyleSheet} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

export const colors = {
  yellow: '#FFBD47',
  black: '#000',
  white: '#fff',
  grey: '#AFAFAF',
};
export const fontSize = {
  sm: 14,
  md: 18,
  lg: 24,
};
export const font = {
  bold: 'DMSans-Bold',
  medium: 'DMSans-Medium',
  regular: 'DMSans-Regular',
};
const header = {
  fontFamily: font.bold,
  color: colors.black,
};
export const baseStyles = StyleSheet.create({
  brandTitle: {
    ...header,
    fontSize: fontSize.lg,
    letterSpacing: 4,
  },
  headerLg: {
    ...header,
    fontSize: fontSize.lg,
  },
  headerMd: {
    ...header,
    fontSize: fontSize.md,
  },
  headerSm: {
    ...header,
    fontSize: fontSize.sm,
  },
  headerSmSpace: {
    ...header,
    fontSize: fontSize.lg,
    letterSpacing: 1,
  },
  subHeader: {
    fontFamily:font.bold,
    fontSize: fontSize.sm,
    color: colors.grey,
  },
  body: {
    fontFamily:font.regular,
    fontSize: fontSize.sm,
    color: colors.black,
  },

  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontol: 30,
  },
  containerJustify: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  tabBar: {
    borderTopEndRadius: 35,
    borderTopLeftRadius: 35,
    position: 'absolute',
    bottom: 0,
    padding: 10,
    width: DEVICE_WIDTH,
    height: 73,
  },
  line: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 30,
    marginVertical: 30,
    borderRadius: 50,
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 3.89,
    elevation: 5,
  },
  buttonShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
