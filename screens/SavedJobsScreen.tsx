import React from "react";
import { View, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useJobs } from "../context/JobContext";
import SavedJobItem from "../components/SavedJobItem";
import { styles } from "../styles/styling";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "SavedJobsScreen">;

const SavedJobsScreen: React.FC<Props> = ({ navigation }) => {
  const { savedJobs, removeJob } = useJobs();

  return (
    <View style={styles.container}>
      <FlatList
        data={savedJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SavedJobItem job={item} removeJob={removeJob} applyJob={() => navigation.navigate("ApplicationForm", { job: item })} />
        )}
      />
    </View>
  );
};

export default SavedJobsScreen;
