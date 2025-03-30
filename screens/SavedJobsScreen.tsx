import React from "react";
import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useJobs } from "../context/JobContext";
import { Job } from "../types/JobTypes";
import { styles } from "../styles/styling";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "SavedJobsScreen">;

const SavedJobsScreen: React.FC<Props> = ({ navigation }) => {
  const { savedJobs, removeJob } = useJobs();

  const handleApplyJob = (job: Job) => {
    navigation.navigate("ApplicationForm", { job });
  };

  const handleRemoveJob = (jobId: string) => {
    removeJob(jobId);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={savedJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.jobItem}>
            <Image source={{ uri: item.companyLogo }} style={styles.companyLogo} />
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.company}>{item.companyName}</Text>
            <Text style={styles.location}>{item.locations}</Text>
            <Text style={styles.salary}>${item.minSalary} - ${item.maxSalary}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.applyButton} onPress={() => handleApplyJob(item)}>
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveJob(item.id)}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SavedJobsScreen;