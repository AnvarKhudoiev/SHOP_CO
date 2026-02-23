import { fetchProductsJewelery } from "@/api/Products.api"
import {  useQuery } from "@tanstack/react-query"
import { Loader } from "lucide-react";
import { ClothesList } from "../Clothes/ClothesList/ClothesList";

export const FetchJewelery = () => {
    
    const queryJew = useQuery({
        queryKey: ['jewelery'],
        queryFn: fetchProductsJewelery
    })

    switch (queryJew.status) {
        case 'pending':
                return <Loader />;
        case 'error':
            return (
                <div className="pt-70 text-black">
                    <span>Произошла ошибка :( </span>
                    <button onClick={() => queryJew.refetch}>refetch</button>
                </div>
            );
        case 'success':
            return <ClothesList list={queryJew.data} sortNeeded={false} title="Jewelery"/>
    }
}