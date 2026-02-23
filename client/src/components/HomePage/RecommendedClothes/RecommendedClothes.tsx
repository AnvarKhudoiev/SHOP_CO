import type { FC } from "react"
import type { ProductList } from "@/api/Products.api"
import { RecommendedClothesItem } from "@/components/HomePage/RecommendedClothesItem/RecommendedClothesItem"
import { useNavigate } from "react-router-dom"

interface PropsT {
    clothes: ProductList,
    title: string,
    border: boolean
}

export const RecommendedClothes: FC<PropsT> = ({ clothes, title, border}) => {
    const navigate = useNavigate();
    return (
        <div className={`lg:max-w-310 lg:flex lg:items-center lg:gap-26.5 lg:mx-auto ${border ? 'pt-35' : ''} pb-30`}>
            <div className= {`mx-auto h-full ${border ? 'border-b border-b-black/10' : ''} pb-20`}>
                <h1 className="font-integralcf text-[48px] text-center md:pb-13.75">{title}</h1>
                <ul className="lg:flex lg:items-center lg:justify-center lg:gap-5 lg:flex-wrap xl:flex-nowrap">
                    {clothes.slice(0, 4).map((item) => (
                        <li onClick={() => navigate(`/clothes/${item.id}`)} key={item.id} className="lg:w-140 xl:w-70 md:h-90">
                            <RecommendedClothesItem item={item} />
                        </li>
                    ))}
                </ul>
                <button onClick={() => navigate('/clothes')} className="mt-35  hover:bg-black/10 transition-all duration-300 text-center block border-black/10 mx-auto border px-20 py-3.75 rounded-[62px] cursor-pointer">View All</button>
            </div>
        </div>
    )
}