import React from "react";
import { View, Text, Button } from "react-native";
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
      <Text>{job.company} - {job.location}</Text>
      {job.salary && <Text>Salary: {job.salary}</Text>}
      <Button title="Remove" onPress={() => removeJob(job.id)} />
      <Button title="Apply" onPress={applyJob} />
    </View>
  );
};

export default SavedJobItem;
