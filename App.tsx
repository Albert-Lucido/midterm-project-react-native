import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { JobProvider } from "./context/JobContext";
import AppNavigator from "./navigation/AppNavigator";

const App = () => {
  return (
    <JobProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </JobProvider>
  );
};

export default App;
