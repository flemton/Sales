import { StyleSheet } from "react-native";
import { fontScale } from "../../../../components/scale";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    padding: fontScale(10),
  },
  inventoryList: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
});

export default styles;
