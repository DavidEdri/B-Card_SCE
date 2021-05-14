import { useState, useEffect } from "react";
import Axios from "axios";

export default <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await Axios(url);
        setData(res.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };

    fetch();
  }, [url]);

  return { loading, data, error };
};
