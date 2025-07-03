import { Platform, TextStyle } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    appBar: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    mainBackground: "#e1e4e8",
    danger: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      ios: "arial",
      android: "roboto",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400" as TextStyle["fontWeight"],
    bold: "700" as TextStyle["fontWeight"],
  },
};

export default theme;
