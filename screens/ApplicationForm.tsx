import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { styles } from "../styles/styling";

type Props = NativeStackScreenProps<RootStackParamList, "ApplicationForm">;

const ApplicationForm: React.FC<Props> = ({ route, navigation }) => {
  const { job } = route.params;
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [whyHire, setWhyHire] = useState("");
  const [errors, setErrors] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    email: "",
    contactNumber: "",
    whyHire: "",
  });

  const validateForm = () => {
    const newErrors = { ...errors };
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!firstName) newErrors.firstName = "First name is required";
    if (!email) newErrors.email = "Email address is required";
    if (!contactNumber) newErrors.contactNumber = "Contact number is required";
    if (!whyHire) newErrors.whyHire = "Description is required";
    if (whyHire.length > 500) newErrors.whyHire = "Description should not exceed 500 characters";
    if (contactNumber.replace(/[^0-9]/g, '').length < 10 || contactNumber.replace(/[^0-9]/g, '').length > 15) {
      newErrors.contactNumber = "Invalid contact number length (must be between 10 and 15 digits)";
    } 
    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === "");
  };

  const submitApplication = () => {
  if (validateForm()) {
    Alert.alert("Success", `Applied to ${job.title} at ${job.companyName}`);
    setLastName("");
    setFirstName("");
    setMiddleName("");
    setEmail("");
    setContactNumber("");
    setWhyHire("");
    navigation.reset({
      index: 0,
      routes: [{ name: 'JobFinderScreen' }]
    });
  }
};

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.jobTitle}>Apply for {job.title}</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          {errors.lastName && <Text style={{ color: 'red' }}>{errors.lastName}</Text>}
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          {errors.firstName && <Text style={{ color: 'red' }}>{errors.firstName}</Text>}
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Middle Name"
            value={middleName}
            onChangeText={setMiddleName}
          />
          {errors.middleName && <Text style={{ color: 'red' }}>{errors.middleName}</Text>}
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Contact Number (XXX-XXX-XXXX)"
            value={contactNumber}
            onChangeText={setContactNumber}
            keyboardType="phone-pad"
          />
          {errors.contactNumber && <Text style={{ color: 'red' }}>{errors.contactNumber}</Text>}
        </View>
        <View>
          <TextInput
            style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
            placeholder="Why should we hire you? (max 500 characters)"
            value={whyHire}
            onChangeText={setWhyHire}
            multiline
          />
          {errors.whyHire && <Text style={{ color: 'red' }}>{errors.whyHire}</Text>}
        </View>
        <Button title="Submit" onPress={submitApplication} />
      </ScrollView>
    </View>
  );
};

export default ApplicationForm;