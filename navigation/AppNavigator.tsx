import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JobFinderScreen from "../screens/JobFinderScreen";
import SavedJobsScreen from "../screens/SavedJobsScreen";
import ApplicationForm from "../screens/ApplicationForm";
import { Job } from "../types/JobTypes";

export type RootStackParamList = {
  JobFinderScreen: undefined;
  SavedJobsScreen: undefined;
  ApplicationForm: { job: Job };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="JobFinderScreen">
      <Stack.Screen name="JobFinderScreen" component={JobFinderScreen} />
      <Stack.Screen name="SavedJobsScreen" component={SavedJobsScreen} />
      <Stack.Screen name="ApplicationForm" component={ApplicationForm} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
