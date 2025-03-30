import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Job } from "../types/JobTypes";
import { styles } from "../styles/styling";

type SavedJobItemProps = {
  job: Job;
  removeJob: (id: string) => void;
  applyJob: () => void;
};

const SavedJobItem: React.FC<SavedJobItemProps> = ({ job, removeJob, applyJob }) => {
  return (
    <View style={styles.jobItem}>
      <Text style={styles.jobTitle}>{job.title}</Text>
      <Text>{job.companyName} - {job.locations.join(", ")}</Text>
      <Text>Salary: ${job.minSalary} - ${job.maxSalary}</Text>
      <TouchableOpacity onPress={() => removeJob(job.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={applyJob} style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SavedJobItem;