import React from "react";
import { View, FlatList, TextInput, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { styles } from "../styles/styling";
import JobItem from "../components/JobItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../navigation/AppNavigator";
import { useJobs } from "../context/JobContext";
import { Job } from '../types/JobTypes';


const JobFinderScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {
    jobs,
    savedJobs,
    fetchJobs,
    saveJob,
    removeJob,
    searchQuery,
    setSearchQuery,
    filteredJobs,
  } = useJobs();

  const applyJob = (job: Job) => () => {
    navigation.navigate('ApplicationForm', { job });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search jobs..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {jobs.length === 0 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={filteredJobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
          <JobItem
              job={item}
              saveJob={saveJob}
              applyJob={applyJob(item)}
              saved={savedJobs.some((savedJob) => savedJob.id === item.id)}
            />          )}
              showsVerticalScrollIndicator={false}

            
        />
      )}
      
      <TouchableOpacity style={styles.savedJobsButton} onPress={() => navigation.navigate('SavedJobsScreen')}>
        <Text style={styles.savedJobsText}>Saved Jobs</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobFinderScreen;