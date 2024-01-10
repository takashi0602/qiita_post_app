import { StyleSheet, View, Image } from "react-native";

const QiitaImage = require("../assets/images/qiita.png");

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={QiitaImage} style={styles.image} alt={"Qiita"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingVertical: 13,
  },
  image: {
    width: 80,
    height: 30,
  },
});

export { Header };
