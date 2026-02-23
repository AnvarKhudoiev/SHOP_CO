import { fetchProductById } from "@/api/Products.api";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useParams } from "react-router-dom";
import { Product } from "./Product";

export const FetchProduct = () => {
  const { id } = useParams();

  const queryProduct = useQuery({
    queryKey: ['clothes', id],
    queryFn: () => fetchProductById(Number(id))
  })
    switch (queryProduct.status) {
        case 'pending':
                return <Loader />;
        case 'error':
            return (
                <div className="pt-70 text-black">
                    <span>{queryProduct.error.message}</span>
                    <button onClick={() => queryProduct.refetch()}>refetch</button>
                </div>
            );
        case 'success':
            return <Product data={queryProduct.data}/>
    }
};
