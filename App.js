import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [name, setName] = useState([
    { name: "shan", key: "1" },
    { name: "sanjai", key: "1" },
    { name: "kumaresan", key: "1" },
    { name: "riyas", key: "1" },
    { name: "sham", key: "1" },
    { name: "srinath", key: "1" },
    { name: "arun", key: "1" },
  ]);
  

  return (
    <View style={styles.container}>
      <ScrollView>
        {name.map((name) => (
          <View key={name.key}>
            <Text style={styles.item}>{name.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    padding:30,
    margin:30,
    backgroundColor:"red",
    fontSize:30,
  }
});
