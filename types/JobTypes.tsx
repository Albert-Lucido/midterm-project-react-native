export interface Job {
  id: string;
  title: string;
  companyName: string;
  companyLogo: string;
  locations: string[];
  minSalary: number;
  maxSalary: number;
  description: string;
}