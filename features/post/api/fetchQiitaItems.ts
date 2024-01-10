import { Alert } from "react-native";
import { QiitaItem } from "../types/qiitaItem";

const fetchQiitaItems = async (page: number): Promise<QiitaItem[]> => {
  const url = `https://qiita.com/api/v2/items?query=tag:Flutter&page=${page}&per_page=10`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("APIの読み込みに失敗しました");
    }
    const data = (await response.json()) as QiitaItem[];
    return data;
  } catch (_) {
    Alert.alert("APIの読み込みに失敗しました");
    return [];
  }
};

export { fetchQiitaItems, type QiitaItem };
