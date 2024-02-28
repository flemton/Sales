import { StyleSheet } from "react-native";
import { fontScale } from "../components/scale";

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    flexDirection: "column",
  },
  tabBarStyle: {
    borderTopWidth: 2,
    borderTopColor: "black",
    paddingTop: fontScale(10),
  },
});

export default styles;
