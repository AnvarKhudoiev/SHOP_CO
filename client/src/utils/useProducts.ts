import { fetchProducts, type ProductList } from "@/api/Products.api";
import { useEffect, useState } from "react";

export const useProducts = (search: string) => {
  const [products, setProducts] = useState<ProductList | []>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const fetchAndFilter = async () => {
      if (!search) {
        await Promise.resolve();
        if (!isCancelled) setProducts([]);
        return;
      }

      setLoading(true);
      try {
        const data = await fetchProducts();
        if (!isCancelled) {
          const filtered = data.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          );
          setProducts(filtered);
        }
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };

    fetchAndFilter();

    return () => {
      isCancelled = true;
    };
  }, [search]);

  return { products, loading };
};