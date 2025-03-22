import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { styles } from "../styles/styling";

type Props = NativeStackScreenProps<RootStackParamList, "ApplicationForm">;

const ApplicationForm: React.FC<Props> = ({ route, navigation }) => {
  const { job } = route.params;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [whyHire, setWhyHire] = useState("");

  const submitApplication = () => {
    if (!name || !email || !contact || !whyHire) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    Alert.alert("Success", `Applied to ${job.title} at ${job.company}`);
    setName("");
    setEmail("");
    setContact("");
    setWhyHire("");
    navigation.navigate("JobFinderScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.jobTitle}>Apply for {job.title}</Text>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Contact Number" value={contact} onChangeText={setContact} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Why should we hire you?" value={whyHire} onChangeText={setWhyHire} multiline />
      <Button title="Submit" onPress={submitApplication} />
    </View>
  );
};

export default ApplicationForm;
