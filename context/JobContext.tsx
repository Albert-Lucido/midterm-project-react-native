import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { Job } from "../types/JobTypes";
import uuid from 'react-native-uuid';


interface JobContextType {
  jobs: Job[];
  savedJobs: Job[];
  fetchJobs: () => void;
  saveJob: (job: Job) => void;
  removeJob: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  filteredJobs: Job[];
}

interface JobProviderProps {
  children: React.ReactNode;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

const JobProvider: React.FC<JobProviderProps> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("https://empllo.com/api/v1");
      const fetchedJobs = response.data.jobs.map((job: any, index: number) => ({
        id: uuid.v4(),
        title: job.title,
        companyName: job.companyName,
        minSalary: job.minSalary,
        maxSalary: job.maxSalary,
        locations: job.locations,
        companyLogo: job.companyLogo,
        description: job.description,
      }));
      setJobs(fetchedJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveJob = (job: Job) => {
    if (!savedJobs.some((saved) => saved.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  const removeJob = (id: string) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== id));
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <JobContext.Provider
      value={{
        jobs,
        savedJobs,
        fetchJobs,
        saveJob,
        removeJob,
        searchQuery,
        setSearchQuery,
        filteredJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobs must be used within a JobProvider");
  }
  return context;
};

export { JobProvider, useJobs };