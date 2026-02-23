import { useQuery } from "@tanstack/react-query"
import { fetchProductsMenClothes } from "@/api/Products.api"
import { Loader } from '@/components/Loader/Loader';
import { RecommendedClothes } from "@/components/HomePage/RecommendedClothes/RecommendedClothes";
import { CarouselSize } from "@/components/HomePage/Carousel/Carousel";
import { useEffect, useState } from "react";

export const FetchMenRecommendedClothes = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const clothesQuery = useQuery({
        queryFn: fetchProductsMenClothes,
        queryKey: ['clothes', 'men']
    })

    switch (clothesQuery.status) {
        case "success":
            if (isMobile) {

                return <CarouselSize clothes={clothesQuery.data} title="Men&rsquo;s Clothes" />
            } else {
                return <RecommendedClothes clothes={clothesQuery.data} title="Men&rsquo;s Clothes" border={true} />
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