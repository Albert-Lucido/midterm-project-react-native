import React from "react";
import { View, Text, Image, Button } from "react-native";
import { styles } from "../styles/styling";

interface Job {
  id: string;
  title: string;
  companyName: string;
  minSalary?: number;
  maxSalary?: number;
  locations: string[];
  companyLogo: string;
}

interface JobItemProps {
  job: Job;
  saveJob: (job: Job) => void;
  applyJob: (job: Job) => void;
}

const JobItem: React.FC<JobItemProps> = ({ job, saveJob, applyJob }) => {
  return (
    <View style={styles.jobItem}>
      {job.companyLogo ? (
        <Image source={{ uri: job.companyLogo }} style={styles.companyLogo} />
      ) : null}
      <Text style={styles.jobTitle}>{job.title}</Text>
      <Text style={styles.company}>{job.companyName}</Text>
      <Text style={styles.salary}>
        {job.minSalary && job.maxSalary
          ? `$${job.minSalary.toLocaleString()} - $${job.maxSalary.toLocaleString()}`
          : "Salary not disclosed"}
      </Text>
      <Text style={styles.location}>{job.locations.join(", ")}</Text>
      <Button title="Save" onPress={() => saveJob(job)} />
      <Button title="Apply" onPress={() => applyJob(job)} />
    </View>
  );
};

export default JobItem;
