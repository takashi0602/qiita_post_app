import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const App = () => {
  return (
    <View style={styles.outWrapper}>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.safeAreaWrapper}>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
      </SafeAreaView>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  outWrapper: {
    flex: 1,
  },
  topSafeArea: {
    backgroundColor: "#FFFFFF",
  },
  safeAreaWrapper: {
    flex: 1,
    backgroundColor: "#F6F6F4",
  },
  container: {
    flex: 1,
    backgroundColor: "#F6F6F4",
  },
});

export default App;
