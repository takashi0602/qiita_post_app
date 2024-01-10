import { useState, useCallback, useEffect } from "react";
import { fetchQiitaItems, type QiitaItem } from "../api/fetchQiitaItems";

const useInfiniteQiitaItems = () => {
  const [items, setItems] = useState<QiitaItem[]>([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const newData = await fetchQiitaItems(1);
      setItems(newData);
      setPage(2);
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  }, [fetchQiitaItems]);

  const onEndReached = useCallback(async () => {
    if (loadingMore) return;
    setLoadingMore(true);
    try {
      const moreData = await fetchQiitaItems(page);
      setItems((prevData) => [...prevData, ...moreData]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingMore(false);
    }
  }, [page, loadingMore, fetchQiitaItems]);

  return { data: items, refreshing, onRefresh, onEndReached };
};

export default useInfiniteQiitaItems;
