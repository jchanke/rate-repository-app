import { StatusBar } from "react-native";
import { NativeRouter } from "react-router-native";

import Main from "./components/Main";

export default function Index() {
  return (
    <>
      <NativeRouter>
        <Main />;
      </NativeRouter>
      <StatusBar barStyle="default" />
    </>
  );
}
