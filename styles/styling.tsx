import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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
  applyButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    width: '45%', // Add this to make the buttons the same width
    marginRight: 10, // Add this to add some space between the buttons
    justifyContent: 'center', // Add this to center the text horizontally
    alignItems: 'center', // Add this to center the text vertically
  
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: "#007bff", // Change the color to match the apply button
    padding: 10,
    borderRadius: 5,
    width: '45%', // Add this to make the buttons the same width
    justifyContent: 'center', // Add this to center the text horizontally
    alignItems: 'center', // Add this to center the text vertically
  
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  savedJobsButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '100%', // Change the width to 100% to make it full width
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center', // Add this to center the button horizontally
},

savedJobsText: {
  color: '#ffffff',
  fontSize: 16,
},

});
