import { StyleSheet, FlatList, View } from "react-native";
import { PostItem } from "./PostItem";
import useInfiniteQiitaItems from "../hooks/useInfiniteQiitaItems";

const PostList = () => {
  const { data, refreshing, onRefresh, onEndReached } = useInfiniteQiitaItems();

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <PostItem
            url={item.url}
            iconUrl={item.user.profile_image_url}
            userId={item.user.id}
            title={item.title}
            createdAt={item.created_at}
          />
        </View>
      )}
      keyExtractor={(item) => item.id}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

export { PostList };
