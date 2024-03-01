import { StyleSheet } from "react-native";
import { heightpoint, widthpoint } from "../../../../components/scale";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: heightpoint(8),
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: widthpoint(80),
  },
});

export default styles;
