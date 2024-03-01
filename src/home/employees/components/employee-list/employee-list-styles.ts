import { StyleSheet } from "react-native";
import { widthpoint } from "../../../../components/scale";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  item: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: widthpoint(82),
  },
  tableHeader: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  tableRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  text: {
    flex: 1,
    marginRight: 5,
  },
});

export default styles;
