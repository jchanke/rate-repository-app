import {
  Text as NativeText,
  StyleProp,
  StyleSheet,
  TextProps as NativeTextProps,
  TextStyle,
} from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorDanger: {
    color: theme.colors.danger,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

interface TextProps extends NativeTextProps {
  color?: "primary" | "textSecondary" | "danger";
  fontSize?: "subheading";
  fontWeight?: "bold";
  style?: StyleProp<TextStyle>;
}

const Text = ({ color, fontSize, fontWeight, style, ...props }: TextProps) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "danger" && styles.colorDanger,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];
  return <NativeText style={textStyle} {...props} />;
};

export default Text;
