import {
  View,
  StyleSheet,
  TextProps,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { Link, To } from "react-router-native";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  appBar: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 5,
    backgroundColor: theme.colors.appBar,
  },
  appBarTab: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
  },
});

interface AppBarTabProps extends TextProps {
  to: To;
}

const AppBarTab = (props: AppBarTabProps) => {
  return (
    <Link to={props.to}>
      <Text style={[props.style, styles.appBarTab]} {...props}>
        {props.children}
      </Text>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={[styles.flexContainer, styles.appBar]}>
      <ScrollView horizontal>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/login">Sign in</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
