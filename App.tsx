import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";

import { Header } from "./components/Header";
import { PostItem } from "./features/post/components/PostItem";

const App = () => {
  return (
    <View style={styles.outWrapper}>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.safeAreaWrapper}>
        <View style={styles.container}>
          <Header />
          <View style={styles.postListContainer}>
            <PostItem
              url="https://qiita.com/Qiita/items/c686397e4a0f4f11683d"
              iconUrl="https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/88/ccf90b557a406157dbb9d2d7e543dae384dbb561/large.png?1575443439"
              userId="qiita"
              title="Example title"
              createdAt="2000-01-01T00:00:00+00:00"
            />
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
