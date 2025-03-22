import React, { useEffect, useState } from "react";
import { View, FlatList, TextInput, Button, Text, ActivityIndicator } from "react-native";
import axios from "axios";
import { styles } from "../styles/styling";
import JobItem from "../components/JobItem";

interface Job {
  id: string;
  title: string;
  companyName: string;
  minSalary?: number;
  maxSalary?: number;
  locations: string[];
  companyLogo: string;
}

const JobFinderScreen = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("https://empllo.com/api/v1");
      const fetchedJobs = response.data.jobs.map((job: any, index: number) => ({
        id: `${job.title}-${index}`,
        title: job.title,
        companyName: job.companyName,
        minSalary: job.minSalary,
        maxSalary: job.maxSalary,
        locations: job.locations,
        companyLogo: job.companyLogo,
      }));
      setJobs(fetchedJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveJob = (job: Job) => {
    if (!savedJobs.some(saved => saved.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  const applyJob = (job: Job) => {
    alert(`Applied to ${job.title} at ${job.companyName}`);
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search jobs..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#6200EE" />
      ) : (
        <FlatList
          data={filteredJobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <JobItem job={item} saveJob={saveJob} applyJob={applyJob} />
          )}
        />
      )}
    </View>
  );
};

export default JobFinderScreen;
