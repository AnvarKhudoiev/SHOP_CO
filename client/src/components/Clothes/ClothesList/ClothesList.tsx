import type { ProductList } from "@/api/Products.api"
import { useMemo, useState, type FC } from "react"
import { ClothesItem } from "../ClothesItem/ClothesItem"
import { useNavigate } from "react-router-dom"


interface PropsT {
    list: ProductList,
    sortNeeded: boolean,
    title: string
}


type SortType = "men's" | "women's" | 'both'

export const ClothesList: FC<PropsT> = ({ list, sortNeeded, title}) => {
    const [sort, setSort] = useState<SortType>("both");
    const navigate = useNavigate(); 

    const sortedClothes = useMemo(() => {
        const copy = [...list];
        switch (sort) {
            case "both":
                return copy
            case "men's":
                return copy.filter((a) => a.category === 'men\'s clothing');
            case "women's":
                return copy.filter((a) => a.category === 'women\'s clothing');
            default:
                return copy;
        }
    }, [list, sort]);

    return (
        <div className="w-[80%] mx-auto pt-10">
            <div className="flex items-center justify-between pb-10 w-[90%] mx-auto">
                <h2 className="font-satoshi font-bold text-[22px] md:text-[1.7rem]">{title}</h2>
                {sortNeeded ?
                    <div className="font-satoshi font-normal text-[12px]">
                        <span>Sort by: </span>
                        <select
                            value={sort}
                            onChange={e => setSort(e.target.value as SortType)}
                        >
                            <option value="both">Both</option>
                            <option value="men's">Men's clothes</option>
                            <option value="women's">Women's clothes</option>
                        </select>
                    </div>
                    : ''}
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 justify-items-center">
                {sortedClothes.map(item => (
                    <li key={item.id} onClick={() => navigate(`/clothes/${item.id}`)} className="cursor-pointer">
                        <ClothesItem item={item} />
                    </li>
                ))}
            </ul>
        </div>
    )
}