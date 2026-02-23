import { fetchProductsMenClothes, fetchProductsWomenClothes } from "@/api/Products.api"
import { useQueries } from "@tanstack/react-query"
import { Loader } from "lucide-react";
import { ClothesList } from "./ClothesList";

export const FetchClothesList = () => {
    const results = useQueries({
        queries: [
            { queryKey: ['clothes', 'men'], queryFn: fetchProductsMenClothes },
            { queryKey: ['clothes', 'women'], queryFn: fetchProductsWomenClothes }
        ]
    })
    const [menClothes, womenClothes] = results.map(r => r.data ?? []);
    const merged = [...menClothes, ...womenClothes];

    const isLoading = results.some(r => r.isLoading);
    const isError = results.some(r => r.isError);
    const isSuccess = results.some(r => r.isSuccess);

    switch (true) {
        case isLoading:
                return <Loader />;
        case isError:
            return (
                <div className="pt-70 text-black">
                    <span>Произошла ошибка :( </span>
                    <button onClick={() => results.forEach(r => r.refetch())}>refetch</button>
                </div>
            );
        case isSuccess:
            return <ClothesList list={merged} sortNeeded={true} title="Clothes"/>
    }
}