import { useCallback } from "react";

const useQuerySerialization = () => {
  const serializeArray = useCallback(
    (array: { label: string; value: { id: number } }[]) => {
      if (!array) return "";
      return array.map((item) => `${item.label}:${item.value.id}`).join(",");
    },
    []
  );

  const deserializeArray = useCallback((string: string) => {
    if (!string) return null;
    return string.split(",").map((item) => {
      const [label, value] = item.split(":");
      return { label, value: { id: parseInt(value, 10) } };
    });
  }, []);

  const serializeObject = useCallback(
    (obj: { label: string; value: { id: number } }) => {
      if (!obj) return "";
      return `${obj.label}:${obj.value.id}`;
    },
    []
  );

  const deserializeObject = useCallback((string: string) => {
    if (!string) return null;
    const [label, value] = string.split(":");
    return { label, value: { id: parseInt(value, 10) } };
  }, []);

  return {
    serializeArray,
    deserializeArray,
    serializeObject,
    deserializeObject,
  };
};

export default useQuerySerialization;
