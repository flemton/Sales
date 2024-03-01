import { StyleSheet } from "react-native";
import { fontScale } from "../scale";

const styles = StyleSheet.create({
  container: {
    margin: fontScale(15),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
  },
  searchBar__unclicked: {
    padding: fontScale(10),
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: fontScale(15),
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: fontScale(10),
    flexDirection: "row",
    width: "76%",
    backgroundColor: "#d9dbda",
    borderRadius: fontScale(15),
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: fontScale(20),
    marginLeft: fontScale(10),
    width: "90%",
  },
});

export default styles;
