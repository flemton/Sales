import { StyleSheet } from "react-native";
import {
  fontScale,
  heightpoint,
  widthpoint,
} from "../../../../components/scale";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: heightpoint(2),
  },
  form: {
    textAlign: "right",
    alignItems: "center",
    justifyContent: "flex-start",
    width: widthpoint(100),
    marginVertical: heightpoint(2),
  },
  label: {
    fontSize: fontScale(18),
  },
  input: {
    height: heightpoint(5),
    width: widthpoint(80),
    marginHorizontal: 0,
    marginVertical: heightpoint(2),
    borderWidth: 1,
  },
  btn: {
    backgroundColor: "blue",
    padding: widthpoint(1),
    borderRadius: widthpoint(2),
    width: widthpoint(80),
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
});

export default styles;
