import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  jobItem: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  company: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  salary: {
    fontSize: 14,
    color: "#28a745",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  companyLogo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginBottom: 10,
  },
});
