import { StyleSheet } from "react-native";
import { fontScale, widthpoint } from "../scale";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "88%",
    width: "100%",
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
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  price: {
    fontSize: fontScale(18),
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
});

export default styles;
