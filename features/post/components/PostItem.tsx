import { useMemo } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Linking,
  Alert,
  Image,
  Text,
} from "react-native";

type Props = {
  url: string;
  iconUrl: string;
  userId: string;
  title: string;
  createdAt: string;
};

const PostItem = ({ url, iconUrl, userId, title, createdAt }: Props) => {
  const date = useMemo(() => {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const monthFormatted = month.toString().padStart(2, "0");
    const dayFormatted = day.toString().padStart(2, "0");
    return `${year}年${monthFormatted}月${dayFormatted}日`;
  }, [createdAt]);

  return (
    <Pressable
      style={styles.container}
      onPress={async () => {
        const canOpen = await Linking.canOpenURL(url);
        if (canOpen) {
          await Linking.openURL(url);
        } else {
          Alert.alert(`URLを開けませんでした: ${url}`);
        }
      }}
    >
      <View style={styles.rowContainer}>
        <Image source={{ uri: iconUrl }} style={styles.icon} />
        <View>
          <Text style={styles.textBlack} numberOfLines={1}>
            @{userId}
          </Text>
          <Text style={styles.textGray} numberOfLines={1}>
            {date}
          </Text>
        </View>
      </View>
      <Text style={styles.textBlack} numberOfLines={2}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  rowContainer: {
    flexDirection: "row",
    columnGap: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textBlack: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#101010",
  },
  textGray: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#B3B3B3",
  },
});

export { PostItem };
