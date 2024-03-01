import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeesScreen from "./components/employees-screen/employees-screen";
import EmployeeAdd from "./components/employee-add/employee-add";

const EmployeesNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EmployeesScreen"
        component={EmployeesScreen}
        options={{ headerTitle: "Employees" }}
      />
      <Stack.Screen
        name="AddEmployee"
        component={EmployeeAdd}
        options={{ headerTitle: "Add Employee" }}
      />
    </Stack.Navigator>
  );
};

export default EmployeesNavigator;
