import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";

import { Header } from "./components/Header";
import { PostList } from "./features/post/components/PostList";

const App = () => {
  return (
    <View style={styles.outWrapper}>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.safeAreaWrapper}>
        <View style={styles.container}>
          <Header />
          <View style={styles.postListContainer}>
            <PostList />
          </View>
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
  postListContainer: {
    paddingTop: 16,
    paddingHorizontal: 15,
  },
});

export default App;
