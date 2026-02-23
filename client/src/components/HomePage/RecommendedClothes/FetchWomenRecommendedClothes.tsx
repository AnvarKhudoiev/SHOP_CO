import { useQuery } from "@tanstack/react-query"
import { fetchProductsWomenClothes } from "@/api/Products.api"
import { Loader } from '@/components/Loader/Loader';
import { RecommendedClothes } from "@/components/HomePage/RecommendedClothes/RecommendedClothes";
import { useEffect, useState } from "react";
import { CarouselSize } from "../Carousel/Carousel";

export const FetchWomenRecommendedClothes = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);



    const clothesQuery = useQuery({
        queryFn: fetchProductsWomenClothes,
        queryKey: ['clothes', 'women']
    })

    switch (clothesQuery.status) {
        case "success":
            if (isMobile) {
                return <CarouselSize clothes={clothesQuery.data} title="Women&rsquo;s Clothes" />
            } else {
                return <RecommendedClothes clothes={clothesQuery.data} title="Women&rsquo;s Clothes" border={false} />
            }
        case "error":
            return (<div className="pt-70 text-black">
                <span >Произошла ошибка :( </span>
                <button onClick={() => clothesQuery.refetch}>refetch</button>
            </div>)
        case "pending":
            return <Loader />
    }
}