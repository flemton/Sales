import { StyleSheet } from "react-native";
import { heightpoint } from "../../components/scale";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: heightpoint(8),
  },
  form: {
    textAlign: "right",
    alignItems: "flex-start",
    width: 300,
  },
  label: {
    fontSize: 18,
  },
  input: {
    height: 40,
    width: 300,
    marginHorizontal: 0,
    marginVertical: 10,
    borderWidth: 1,
  },
  btnContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 300,
  },
  btn: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    width: 300,
    marginVertical: 10,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

export default styles;
