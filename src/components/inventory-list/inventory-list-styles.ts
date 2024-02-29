import { StyleSheet } from "react-native";
import { fontScale } from "../scale";

const styles = StyleSheet.create({
  container: {
    height: "85%",
    width: "100%",
  },
  item: {
    marginHorizontal: fontScale(30),
    marginVertical: fontScale(16),
    borderBottomWidth: fontScale(2),
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: fontScale(20),
    fontWeight: "bold",
    marginBottom: fontScale(5),
    fontStyle: "italic",
  },
  details: {
    fontSize: fontScale(15),
    marginBottom: fontScale(5),
  },
});

export default styles;
